import { useReducer } from 'react'
import './App.css'

const counterReducer = (state,action)=>{
              console.log(state,"state"); 
              console.log(action,"action");
               
              // if(action === "increase counter"){
              //   return state+1;
              // }else if(action ==="decrease counter"){
              //   return state - 1;
              // }else{
              //   return "none"
              // }  
              switch(action){
                case "increase counter":{
                  return state +1;
                }
                case "decrease counter":{
                  return state -1;
                }
                default:{
                  return state;
                }
              }
                   
}

function App() {
const [counter,dispatch] = useReducer(counterReducer,20)
           
  return (
    <>
   <div className='APP'>

    <p>The value of the counter is {counter}</p>
    <button onClick={()=>dispatch("increase counter")}>increase by 1</button>
    <button onClick={()=>dispatch("decrease counter")}>decrease by 1</button>
    <button onClick={()=>dispatch()}>decrease by 2</button>
   </div>
    </>
  )
}

export default App
