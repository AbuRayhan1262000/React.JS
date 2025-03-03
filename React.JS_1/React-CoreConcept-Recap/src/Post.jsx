
export default function Post({ post }) {
      const{id,name,username,email}=post
      
    
    return (
        <div className="Post">
            <p>Title :{id}</p>
            <p>User Id :{name}</p>
            <p>Post Id :{username}</p>
            <p>Email : { email}</p>
        </div>
    )
}