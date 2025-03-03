import { useState } from 'react'
import AppTitle from './AppTitle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
   
  const handlerclick = () => {
      setCount((e)=>e+1)
  }
  return (
    <>
      <h2>Count : {count}</h2>
      <button onClick={handlerclick}>Increment</button>
      <AppTitle />
    </>
  )
}

export default App
