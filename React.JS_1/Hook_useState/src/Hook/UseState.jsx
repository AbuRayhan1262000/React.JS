import { useState } from "react"

export default function UseState(){
const[count, setCount] = useState(0)

const EventHandler =()=>{
    //0+1 jog hobe 2bar 3bar set count korleo 1 korey barbe
    // setCount(count+1)

    
    //previous valuer sathe 1 jog hobe 
    setCount((prevCount)=>prevCount+1)
    

};

    return(
    <>
   <h1>Count :{count} </h1>
   <button onClick={EventHandler}>Increment</button>
   </>
)
}
