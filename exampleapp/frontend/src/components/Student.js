import React from 'react'
import Button from './Button'

function Student({ student, addOrEdit, deleteStudent }) {
  const url = 'https://academico.um.edu.mx/academico/foto?Codigo='

  return (
    <>
      <div className="card">
        <div className="card-body">
          <img style={{ maxHeight: 100 + '%', maxWidth: 100 + '%' }} src={url + student.matricula} alt="" />
          <h4>Student Info</h4>
          <p>Matricula: {student.matricula}</p>
          <p>Name: {student.name}</p>
          <p>Email: {student.email}</p>
          <div className='d-flex justify-content-between align-items-center'>
          {/* <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Edit
            </button>
            <button type="button" className="btn btn-danger" onClick={() => deleteStudent(student._id)}>
              Delete
            </button> */}
            <Button text={'Edit'} color={'btn-primary'} idStudent={student._id} action={addOrEdit} isModal={true}></Button>
            <Button text={'Delete'} color={'btn-danger'} idStudent={student._id} action={deleteStudent} ></Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student