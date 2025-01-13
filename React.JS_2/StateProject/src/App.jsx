import { useState } from 'react'
import './App.css'

function App() {
  const[studentName,setStudentName] = useState("")
  const[student,setStudent] = useState([])
  const [editMode,setEditMode] = useState(false)
  const[editableMode,setEditableMode] = useState(null)

  //student name handler
  const changeHandler = (e)=>{
   setStudentName(e.target.value);
}

//submit
const submitHandler = (e)=>{
   e.preventDefault();
   editMode?updateStudent():createstudent();
 
}
const createstudent = ()=>{
  const createStudent = {
    id:Date.now(),
    name : studentName,
    isPresent:undefined
   }
   setStudent([...student,createStudent])
   setStudentName("")
}

//Edit 
const  editHandler = (students)=>{
  setStudentName(students.name)
  setEditableMode(students)
  setEditMode(true);
  console.log(editableMode);
}

//update 
const updateStudent = ()=>{
    const newStudent = student.map((students)=>{
           if(students.id ===editableMode.id){
            return {...students,name:studentName}
           }else{
            return students;
           }
          
    })
    setStudent(newStudent)
    setEditMode(false)
    setStudentName("")
}

//delete
const deleteHandle = (students)=>{
       const deleteStudent = student.filter((item)=>{
          return (students.id !==item.id)
        
       })
       setStudent(deleteStudent)
}

//present student
const presentHandler = (singleStudent)=>{
  if(singleStudent.isPresent !== undefined){
    return alert(`This student is already  ${singleStudent.isPresent?"present":"Absent"}`)
  }
  const replaceStudent = student.map((students)=>{
    if(students.id===singleStudent.id){
      return {...students,isPresent:true}
    }else{
      return students;
    }
  }
    
     
  
  )
  setStudent(replaceStudent)
}

//absent 
const absentHandler = (singleStudent)=>{
  if(singleStudent.isPresent !== undefined){
    return alert(`This student is already  ${singleStudent.isPresent?"present":"Absent"}`)
  }
  const replaceStudent = student.map((students)=>{
    if(students.id===singleStudent.id){
      return {...students,isPresent:false}
    }else{
      return students;
    }
  })
  setStudent(replaceStudent)
}

//toggle handler
const toggleHandler = (presentstudent)=>{
  const replaceStudent = student.map((students)=>{
    if(students.id===presentstudent.id){
      return {...students,isPresent:!students.isPresent}
    }else{
      return students;
    }
  })
  setStudent(replaceStudent)
}


  return (
    <>
      <div className="border-color">
      <form action=""onSubmit={submitHandler}>
        <input type="text"value ={studentName}onChange={changeHandler} />
        <button type="submit">{editMode?"Update":"add"}</button>
      </form>


      <div className="student-list">
        
        <div className="all-student">
          <h3>All student</h3>
          <ul>
            {student.map((singleStudent)=>{
                return <li key={singleStudent.id}>
                  {singleStudent.name}
                  <button className='margin-left' onClick={()=>editHandler(singleStudent)}>Edit</button>
                  <button onClick={()=>deleteHandle(singleStudent)}>Delete</button>
                  <button onClick={()=>presentHandler(singleStudent)}>Make Present</button>
                  <button onClick={()=>absentHandler(singleStudent)}>Make Absent</button>
                  </li>
            })}
          </ul>
        </div>

        <div className="present-student">
          <h3>Present Student</h3>
          {student.filter((students)=>students.isPresent ===true).map((presentstudent)=>{
                return   <li key={presentstudent.id}>
                  {presentstudent.name}
                  <button onClick={()=>toggleHandler(presentstudent)}>Accidentally added</button>
                  </li>
          })}
        </div>

        <div className="absent-student">
          <h3>Absent Student</h3>
          {student.filter((students)=>students.isPresent ===false).map((presentstudent)=>{
                return   <li key={presentstudent.id}>
                  {presentstudent.name}
                  <button onClick={()=>toggleHandler(presentstudent)}>Accidentally added</button>
                  </li>
          })}
        </div>
      </div>
      </div>
    </>
  )
}

export default App
