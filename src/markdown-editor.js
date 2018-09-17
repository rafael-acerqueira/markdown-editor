import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => (
  <div className='editor'>
    <button onClick={() => localStorage.setItem('md', value)}>Salvar</button>
    <textarea value={value} onChange={handleChange} autoFocus />
    <div className='view' dangerouslySetInnerHTML={getMarkup()} />
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func
}

export default MarkdownEditor
