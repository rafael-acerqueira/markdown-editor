import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header'>
    <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
    <button onClick={handleCreate}>Criar novo</button>
    <button onClick={handleRemove} className='remove-button'>Remover</button>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
