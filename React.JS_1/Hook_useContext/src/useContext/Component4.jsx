import React,{useContext} from 'react'
import { UserContext } from './UserContext.js'

function Component4() {
    // const user = useContext(UserContext);   // for single state

    const{user,text}=useContext(UserContext);  //for multiple state
    
  return (
    <div>
      <p>{user.Name}</p>
      <p>{user.id}</p>
      <p>{text}</p>
    </div>
  )
}

export default Component4
