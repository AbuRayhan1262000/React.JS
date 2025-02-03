import { useState } from "react"
function App() {
  const handler1=()=> {
      alert("handler1")
  }
  

  const handler2 = (value) => {
    alert(value+5)
  }

  function handler4() {
     alert("handler4")
  }

  const handler5 = function () {
     alert("handler5")
  }

  const handler6 = function abc() {
    alert("handler6")
 }

  return (
    <>
      <button onClick={handler1}>handler-1</button>
      <button onClick={()=>handler2(5)}>handler-2</button>
      <button onClick={() => alert("handle3")}>handler-3</button>
      <button onClick={handler4}>handler-4</button>
      <button onClick={handler5}>handler-5</button>
      <button onClick={handler6}>handler-6</button>
    </>
  )
}

export default App
