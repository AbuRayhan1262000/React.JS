import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
    // setCount(count+1);
  }

  const handleReduce = ()=>{
    const newCount = count - 1;
    setCount(newCount)
   }
  return (
    <>
      <h3>Counter : {count}</h3>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </>
  )
}

export default App
