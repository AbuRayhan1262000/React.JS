import React, { useState } from "react"
import { memo } from "react";
const AppTitle = () => {
    const [count,setCount] = useState(0)
  
    console.log("Rendering app title");
    
    const handlerDecrement = () => {
         setCount((e)=>e-1)
    }
    return (
        <>
            <h2>count { count}</h2>
            <button onClick={handlerDecrement}>Decrement</button> 
        </>
    )
}
export default memo(AppTitle);

//memo function use kore rendering atkailam