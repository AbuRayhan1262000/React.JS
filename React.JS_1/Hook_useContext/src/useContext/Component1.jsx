import React, { useState } from 'react'
import { UserContext } from './UserContext.js'
import Component2 from './Component2'
function Component1() {
    const [user,setUser] = useState({id:101,Name:"Abu Rayhan"})
    const [text,setText]=useState("hello i am text")
  return (
    <>
        {/* <UserContext.Provider value={user}>
        <Component2 />
        </UserContext.Provider> */}


        {/* multiple State return korle object akre patate hobe */}
        <UserContext.Provider value={{user,text}}>  
        <Component2 />
        </UserContext.Provider> 
    </>

  )
}

export default Component1
