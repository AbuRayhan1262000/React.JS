
import { useState } from "react";
import { tasks,taskMore } from "../Data/tasks";
export default function ToDos(){
    const [todos, setTodos] = useState([]);
    function handleTodo(){
        setTodos(tasks);
    }
    function handleTodoMore(){
        // const moreTodos = [...todos,...taskMore]
        // setTodos(moreTodos)
        setTodos(
            [...todos,...taskMore]
        )
    }
    return (
        <div>
            <h1>Todos</h1>
        <ul>
         {todos.map((todo)=>(
            <li key={todo.id}>{todo.title}</li>
         ))}
       
        </ul>
        <div>
            <button onClick={handleTodo}>Loar...</button>
            <button onClick={handleTodoMore}>LodeMore</button>
        </div>
        </div>
    );
       
}
