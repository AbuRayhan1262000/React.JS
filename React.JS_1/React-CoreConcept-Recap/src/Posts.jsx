import { useEffect, useState } from "react"
import Post from "./Post";
export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data)=>setPosts(data))
            
    },[])
    return (
        <div>
            <h3>Post:{posts.length}</h3>
            {posts.map((post,index) => {
                return <Post post = {post} ></Post>
            })}
         
        </div>
    )
}