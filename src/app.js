'use strict'

import React, { Component } from 'react'
import { v4 } from 'node-uuid'
import marked from 'marked'
import MarkdownEditor from 'containers/markdown-editor'

import './css/style.css'

import('highlight.js').then((highlight) => {
  marked.setOptions({
    highlight: (code, lang) => {
      if (lang && highlight.getLanguage(lang)) {
        return highlight.highlight(lang, code).value
      }
      return highlight.highlightAuto(code).value
    }
  })
})

class App extends Component {
  constructor (props) {
    super(props)

    this.clearState = () => ({
        value: '',
        id: v4()
    })

    this.state = {
      ...this.clearState(),
      isSaving: null,
      title: '',
      files: {}
    }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value, isSaving: true })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if(this.state.isSaving) {
        const newFile = {
          title: this.state.title || 'Sem título',
          content: this.state.value
        }
        localStorage.setItem(this.state.id, JSON.stringify(newFile))
        this.setState({
          isSaving: false,
          files: {
            ...this.state.files,
            [this.state.id]: newFile
          }
         })
      }
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.id)


      const { [this.state.id]: id, ...files } = this.state.files
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = node => {
      this.textarea = node
    }

    this.handleOpenFile = fileId => () => (
      this.setState({
        title: this.state.files[fileId].title,
        value: this.state.files[fileId].content,
        id: fileId
      })
    )
  }

  componentDidMount() {
    const files = Object.keys(localStorage)
    this.setState({
      files: files.map((id) => id.match(/^\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/)).reduce((acc, fileId) => (
      {
        ...acc,
        [fileId]: JSON.parse(localStorage.getItem(fileId))
      }
    ), {})
    })
    }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 1000)
  }

  componentWillMount() {
    clearInterval(this.timer)
  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    )
  }
}

export default App
