import React from 'react'

function Button({text, color, isModal, idStudent, action}) {
  
  let attributes = {
    type: 'button',
    className: `btn ${color}`
  }
  if (isModal) {
    attributes = {
      ...attributes,
      'data-bs-toggle': 'modal',
      'data-bs-target': '#exampleModal'
    }
  }

  return (
    <>
    <button {...attributes} onClick={idStudent ? () => action(idStudent) : () => action()}>
        {text}
      </button>
    </>
  )
}

export default Button