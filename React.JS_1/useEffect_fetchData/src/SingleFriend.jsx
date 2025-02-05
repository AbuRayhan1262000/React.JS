export default function SingleFriend({data}) {
    const { name,email} = data;
         console.log(data);
         
         
    
    return (
        <>
            <h3>name:{name}</h3>
            <h3>email:{email}</h3>
        </>
    )
}