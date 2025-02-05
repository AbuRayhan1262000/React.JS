import { useEffect, useState } from 'react'
import Friend from './Friend.jsx';
import './App.css'
function App() {
  const [user, setUser] = useState([])
  console.log(user);
  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data)=>setUser(data))
  }, []);

  return (
    <>
      <h3>User:{user.length}</h3>
      <Friend></Friend>
    </>
  )
}

export default App
