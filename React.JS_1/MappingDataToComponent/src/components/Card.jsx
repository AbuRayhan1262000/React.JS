

//props mane ami ekta object receive korci
function Card(props){
    // console.log(props);

    
    //destructuring
//const [name,age]=props
    return(
        <>
        <div className="card">
            {props.Name}{props.Age}
            <h5>App ToDo</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
            doloremque! Perferendis veritatis illo quaerat dolorem sapiente praesentium voluptas dolorum quas.</p>
            <p></p>
        </div>
        </>
    )
}
export default Card