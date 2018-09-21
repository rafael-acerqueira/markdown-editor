import React from 'react'
import PropTypes from 'prop-types'

import MarkdownEditorHeader from './header'
import Files from './files'

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, files, handleOpenFile, ...props }) => (
  <section>
    <MarkdownEditorHeader className='header' {...props} handleChange={handleChange}/>
    <Files files={files} handleOpenFile={handleOpenFile}/>
    <section className='editor'>
      <textarea value={value} onChange={handleChange('value')} autoFocus ref={textareaRef}/>
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
