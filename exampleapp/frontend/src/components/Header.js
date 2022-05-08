import React from 'react'
import Button from './Button'

function Header({ addOrEdit }) { 
  return (
    <div className='mt-2 d-flex justify-content-between align-items-center'>
      <h3>Students</h3>
      <Button text={'Add Student'} color={'btn-primary'} action={addOrEdit} isModal={true}></Button>
    </div>
  )
}

export default Header