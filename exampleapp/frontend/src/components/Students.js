import Student from './Student'

function Students({students, addOrEdit, deleteStudent}) {

  return (
    <div className="row">
      {students.map( (student) => {
        return (
          <div className="col-md-3" key={student._id}>
            <Student student={student} addOrEdit={addOrEdit} deleteStudent={deleteStudent} />
          </div>
        )
      })}
    </div >

  )
}

export default Students