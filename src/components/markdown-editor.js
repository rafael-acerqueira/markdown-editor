import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange, handleSave, getMarkup }) => (
  <div>
    <div className='editor'>
      <textarea value={value} onChange={handleChange} autoFocus />
      <div className='view' dangerouslySetInnerHTML={getMarkup()} />
    </div>
    <button onClick={handleSave} className='save'>Salvar</button>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
}

export default MarkdownEditor
