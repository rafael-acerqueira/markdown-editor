'use strict'

import React, { Component } from 'react'
import marked from 'marked'
import MarkdownEditor from 'components/markdown-editor'

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

    this.state = {
      value: '',
      isSaving: false
    }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value, isSaving: true })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      localStorage.setItem('md', this.state.value)
      this.setState({ isSaving: false })
    }
  }

  componentDidMount() {
      const value = localStorage.getItem('md')
      this.setState({ value })
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
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
