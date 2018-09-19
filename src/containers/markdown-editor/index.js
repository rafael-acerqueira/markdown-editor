import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './header'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => (
  <section>
    <MarkdownEditorHeader className='header' {...props}/>
    <section className='editor'>
      <textarea value={value} onChange={handleChange} autoFocus ref={textareaRef}/>
      <article className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor
