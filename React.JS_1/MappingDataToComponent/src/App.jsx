import Card from './components/Card.jsx'
import Data from './Data.json';
// import './App.css'

 function App() {
  console.log(Data);
  
 let item = [];
 for(let x = 0;x<Data.length;x++){
  item.push(<Card Name={Data[x].name} Age={Data[x].age}/>)
 }

  return (
    <>
     {item}
     
    </>
  )
}
export default App




 
