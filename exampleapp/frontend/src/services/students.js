const StudentDataService = {}

StudentDataService.getAll = async () =>{
    const res = await fetch('http://localhost:5000/api/students/');
    return res.json();
}

StudentDataService.saveStudent = async (student) =>{
    const res = await fetch('http://localhost:5000/api/students/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(student)
      });
      return res.json()
}

StudentDataService.deleteStudent = async (id) =>{
    const res = await fetch(`http://localhost:5000/api/students/${id}`, {
        method: 'DELETE',
      })
    return res
}

export default StudentDataService;