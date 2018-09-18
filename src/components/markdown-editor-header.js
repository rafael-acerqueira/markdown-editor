import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ isSaving, handleRemove }) => (
  <header className='header'>
    <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    <button onClick={handleRemove} className='remove-button'>Remover</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
