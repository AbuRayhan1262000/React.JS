
import './App.css'
import BioData  from "./assets/components/BioData.jsx";
function App() {
 
  return (
    <div className="personal_information">
       <BioData
       name="Abu Rayhan"
       age={24}
       profession="Software Engineer"
       address="Dhaka,Gulsan"
       skills = {["python","java","php"]}
       />
    </div>
     
  )
}

export default App
