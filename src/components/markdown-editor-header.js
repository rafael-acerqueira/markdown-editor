import React from 'react'
import PropTypes from 'prop-types'

const MarkdownEditorHeader = ({ isSaving }) => (
  <header className='header'>
    <p className='save-message'>{isSaving ? 'Salvando...' : 'Salvo!'}</p>
  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool.isRequired
}

export default MarkdownEditorHeader
