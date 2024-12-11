import { useState } from "react";
export default function Counter(){
    //hook 
    const [count,setCount]=useState(0); //[currentValue,changeValue]
    const [message,setMessage]=useState("Welcome to the class");
    
    const handleClick = ()=>{
        //1. increment count
        //2. reload/re-render
        setCount((c)=>c+1);//setter function er vitor updater function 
        setCount((c)=>c+1);
        //setCount(count +1);   //setter function eksathe 2 ta kaj kore increment and reload etite ekta parameter ney
        
    };
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={handleClick}>Increment</button>

            <p>{message}</p>
            <button onClick={()=>{
                setMessage("Welcome to the React class")
            }}>
                changeMessage
            </button>
        </div>
    );
}