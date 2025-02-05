import { useEffect, useState } from "react"
import SingleFriend from './SingleFriend.jsx'
export default function Friend() {
    const [friend, setFriend] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((data)=>setFriend(data))
    }, [])
    console.log(friend);
    
    return (
        <div className='box'>
            <h3>Friend :{friend.length}</h3>
            {friend.map((sngleStudent) => {
               return <SingleFriend data={ sngleStudent} />
            })}

           
        </div>
    )
}