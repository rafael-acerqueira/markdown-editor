'use strict'

import React, { Component } from 'react'
import MarkdownEditor from './markdown-editor'

import 'normalize.css'
import './css/style.css'

class App extends Component {

  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.handleChange = (e) => {
      this.setState({ value: e.target.value })
      console.log(e.target.value)
    }

    this.getMarkup = () => {
      return { __html: this.state.value }
    }

  }

  render () {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}


export default App
