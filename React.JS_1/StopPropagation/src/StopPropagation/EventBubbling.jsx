export default function EventBubbling(){

const handleParentClick = (event)=>{
console.log('parent Event :', event);

};

    const childClickHandler =(event)=>{
        event.stopPropagation();// child button e click korte parent na aisa sudo child e asbe
        console.log('Child Event :',event);

};
    
    return(
        <div onClick={handleParentClick}>
            <h2>Welcome</h2>
            <button onClick={childClickHandler}>button</button>
        </div>
    )
}