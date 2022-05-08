import React, { useEffect, useState } from 'react'

function Form({ student, action }) {
  console.log(student);
  const [matricula, setMatricula] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (Object.keys(student).length) {
      setMatricula(student.matricula)
      setName(student.name)
      setEmail(student.email)
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!matricula) {
      alert('Please fill form');
      return
    }

    action({ matricula, name, email })

    setMatricula('')
    setName('')
    setEmail('')
  }
  return (
    <>
      <form className="" onSubmit={onSubmit}>
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
        <hr />
        <div className='mt-4 d-flex justify-content-end'>
          <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save</button>
        </div>
      </form >
    </>
  )
}

export default Form