import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Modal from './components/Modal';
import Students from './components/Students';
import StudentDataService from './services/students'


function App() {
  const [students, setStudents] = useState([])
  const [student, setStudent] = useState({})
  const [action, setAction] = useState(() => () => {})

  useEffect(() => {
    retriveStudents();
  }, [])

  const retriveStudents = async () => {
    const data = await StudentDataService.getAll();
    setStudents(data);
  }

  const addStudent = async (student) => {
    const data = await StudentDataService.saveStudent(student);
    setStudents([...students, data.student])
  }

  const editStudent = async (id) => {
    const res = await fetch(`http://localhost:5000/api/students/${id}`);
    const data = await res.json();
    setStudent(data.student);
  }

  const updateStudent = async (id, updStudent) => {
    const res = await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updStudent)
    });
    const data = await res.json();
    setStudents(students.map(student => student._id === id ? {...students, matricula: data.student.matricula, name: data.student.name, email: data.student.email} : student ));
  }

  const deleteStudent = async (id) => {
    const res = StudentDataService.deleteStudent(id);
    if (res.status === 200) {
      setStudents(students.filter(student => student._id !== id))
    } else {
      alert('Error while deleting student');
    }
  }

  const addOrEdit = (id) => {
    if (id === undefined) {
      setAction(() => addStudent)
    } else {
      editStudent(id);
      setAction(() => updateStudent)
    }
  }

  return (
    <div className="container">
      <Header addOrEdit={addOrEdit} />
      <Modal student={student} action={action} />
      <Students students={students} addOrEdit={addOrEdit} deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;