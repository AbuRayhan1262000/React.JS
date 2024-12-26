import { useState } from "react";

export default function FormControlled(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handleNameChange = (event)=>{
        setName(event.target.value)
    }

    const handleEmailChange = (event)=>{
        setEmail(event.target.value)
        
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
        
    }

    const handleSubmit = (e)=>{
        let userInfo = {
            name,
            email,
            password
        }
        console.log(userInfo);
        
        
        console.log("form is submitted");
        e.preventDefault()  //form submit dileo refresh houar por value jabe na value thakbe
    }
    return(
        <>
        <form action=""onSubmit={handleSubmit}>
           <div>
           <label htmlFor="">Name : </label>
           <input type="text"onChange={handleNameChange} />
           </div>

           <div>
           <label htmlFor="">Email : </label>
           <input type="email"onChange={handleEmailChange}/>
           </div>

           <div>
           <label htmlFor="">Password: </label>
           <input type="password"onChange={handlePasswordChange}/>
           </div>

           <div>
           <button>Submit</button>
           </div>
        </form>
        </>
    )
}