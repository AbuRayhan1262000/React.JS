import "./App.css"
import ToDos from "./components/ToDos";
// import MessyTernary from "./components/MessyTernary";
// function Item({ name, isPacked }) {
 
//   return (
//   <li className="item">
//     {name}{isPacked && '✅'}</li>
// );
// }
// export default function App(){
//   //controller or logical section

//   //view
//   return(
// <section>
//       <h1>Sally Rides Packing List</h1>
//       <ul>
//         <Item 
//           isPacked={true} 
//           name="Space suit" 
//         />
//         <Item 
//           isPacked={true} 
//           name="Helmet with a golden leaf" 
//         />
//         <Item 
//           isPacked={false} 
//           name="Photo of Tam" 
//         />
//       </ul>
//       <MessyTernary user={false} isAdmin={true} isGuest={false} />
//     </section>

//   );
// }


//rendering list
// 


// Filtering arrays of items 
// export default function App(){
//   const people = [{
//     id: 0,
//     name: 'Creola Katherine Johnson',
//     profession: 'mathematician',
//   }, {
//     id: 1,
//     name: 'Mario José Molina-Pasquel Henríquez',
//     profession: 'chemist',
//   }, {
//     id: 2,
//     name: 'Mohammad Abdus Salam',
//     profession: 'physicist',
//   }, {
//     id: 3,
//     name: 'Percy Lavon Julian',
//     profession: 'chemist',  
//   }, {
//     id: 4,
//     name: 'Subrahmanyan Chandrasekhar',
//     profession: 'astrophysicist',
//   }];

//   const chemists = people.filter(chemist=>chemist.profession==='chemist');
//   return(
//     // <ul>
//     //   {people.map((people)=><li key={people.id}>{people.name}</li>)}
//     // </ul>

//       <ul>
//       {chemists.map((chemist)=><li key={chemist.id}>{chemist.name}</li>)}
//       </ul>
//   );
// }

export default function App(){
  return(
    <div>
      <ToDos/>
    </div>
  );
}