import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/button'

const MarkdownEditorHeader = ({ isSaving, handleRemove, handleCreate }) => (
  <header className='header'>
    {isSaving !== null && (
      <p className='save-message'>
          {isSaving ? 'Salvando...' : 'Salvo!'}
      </p>
    )}

    <Button onClick={handleCreate} kind='success'>
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind='danger'>
      Remover
    </Button>

  </header>
)

MarkdownEditorHeader.propTypes = {
  isSaving: PropTypes.bool,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
}

export default MarkdownEditorHeader
