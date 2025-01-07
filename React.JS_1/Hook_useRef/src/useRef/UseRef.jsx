import { useRef } from "react";
export default function UseRef(){


    const userNameRef = useRef();  //userNameRef ke dom elemen e ref er vitor dite hobe dom er element ke access korte
    const userEmailRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit =(event)=>{
        event.preventDefault(); // preventDefault form submit deoar por o form er value dore rakhe value chole jaina
        console.log("form is submitted");

        const userName = userNameRef.current.value;
        const userEmail = userEmailRef.current.value;
        const userPassword = userPasswordRef.current.value;
        console.log({userName,userEmail,userPassword});

        userEmailRef.current.style.color="red";
        
        
    }
    return(
        <>
        <form action=""onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name </label>
            <input type="text"ref={userNameRef}></input>
        </div>

        <div>
            <label htmlFor="email">Email </label>
            <input type="text"ref={userEmailRef}></input>
        </div>

        <div>
            <label htmlFor="password"> Password</label>
            <input type="password"ref={userPasswordRef}></input>
        </div>

        <div>
            <button type="submit">Register</button>
        </div>
        </form>
        </>
    )
}