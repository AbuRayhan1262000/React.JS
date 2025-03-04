import { useState,useCallback } from 'react'
import './App.css'
import Todos from './Todos';
function App() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    console.log("count");
    const increment = () => {
      setCount((c) => c + 1);
     
      
    };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
    
  },[todos])

  return (
    <>
        <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}

export default App
