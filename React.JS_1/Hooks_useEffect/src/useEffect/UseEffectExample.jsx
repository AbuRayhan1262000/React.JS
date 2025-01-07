import { useState } from "react"
import { useEffect } from "react"

function UseEffectExample(){
 const[count,setCount] = useState(0)
     
  //  call becomes of every rendering
  //  useEffect(()=>{
  //      console.log("useEffect");
  //     })



      //only one call 
     // useEffect(()=>{
     //   console.log("useEffect");
     // },[])



      //Each call will be every changing value of count 
      useEffect(()=>{
        console.log("useEffect");
      },[count])

    return(
      <>
      {console.log("rendering")}
      <h4>Count : {count}</h4>
      <button onClick={()=>(setCount(counts=>counts+1))}>Click</button>
         
      </>
    )
}
export default UseEffectExample