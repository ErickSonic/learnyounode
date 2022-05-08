import React, { useEffect, useState } from 'react'

function Modal({ student, action }) {
  const [matricula, setMatricula] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setMatricula(student.matricula);
    setName(student.name);
    setEmail(student.email);
  }, [student])

  const onCloseModal = () => {
    setMatricula('')
    setName('')
    setEmail('')
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      alert('Please fill form');
      return
    }
    if (Object.keys(student).length > 0) {
      action(student._id, { matricula, name, email })
    } else {
      action({ matricula, name, email })
    }
    
    setMatricula('')
    setName('')
    setEmail('')
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form className="" onSubmit={onSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Student Info</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="matricula">Matricula</label>
                  <input type="text" name="matricula" value={matricula} className="form-control" onChange={(e) => setMatricula(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" value={name} className="form-control" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" value={email} className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => onCloseModal()}>Close</button>
                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
              </div>
            </form >
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal