function NestedMap(){
    const list = [
        {
            name:"Abu Rayhan",
            age:24,
            phones:[
               {
                home:"07455511",
                office:"184521212"
               }
            ]
        }
    ]
    return(
        <>
            {list.map((user,index)=>(
               <div key={index}>
                 <p>Name{user.name}</p>
                 <p>Age{user.age}</p>
                 <div style={{display:"inline-flex"}}>Phone:{user.phones.map((phone,index)=>
                    <div key={index}>
                        <p>Home : {phone.home}</p>
                        <p>Office : {phone.office}</p>
                        </div>
                    )}</div>
               </div>
            ))
            
            }
        </>
    )
}
export default NestedMap