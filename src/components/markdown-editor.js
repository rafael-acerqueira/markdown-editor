import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './markdown-editor-header'

const MarkdownEditor = ({ value, isSaving, handleChange, getMarkup }) => (
  <section>
    <MarkdownEditorHeader className='header' isSaving={isSaving}/>
    <section className='editor'>
      <textarea value={value} onChange={handleChange} autoFocus />
      <article className='view' dangerouslySetInnerHTML={getMarkup()} />
    </section>
  </section>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired
}

export default MarkdownEditor
