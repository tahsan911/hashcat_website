import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);
  return (
    <div>
      <p className="text-center text-4xl my-10">Total User is: {users.length}</p>
      {users.map((user) => (
        <User userTotal={users.length} name={user.name} email={user.email} id={user.id}></User>
      ))}
      
    </div>
  );
}

function User(props) {
  return (
    <div>
      <div className="flex items-center justify-center my-4">
        <div className="bg-orange-300 w-1/2 p-4 m-4 rounded-lg">
          <h1 className="text-md text-center mb-3">Id: {props.id}</h1>
          <h1 className="text-3xl text-center mb-3">Name: {props.name}</h1>
          <h1 className="text-lg text-center">Email: {props.email}</h1>
        </div>
      </div>
    </div>
  );
}

// function Car(props) {
//   return (
//     <div className="flex items-center justify-center my-4">
//       <div className="bg-orange-300 w-1/2 p-4 m-4 rounded-lg">
//         <h1 className="text-3xl text-center mb-3">Car Name:{props.name}</h1>
//         <h1 className="text-xl text-center">Car Price:{props.price}</h1>
//       </div>
//     </div>
//   );
// }

// const cars = [
//   {name: "BMW", price: "$15000"},
//   {name: "Nissan", price: "$30000"},
//   {name: "Ferarri", price: "$45000"},
//   {name: "Marcedes", price: "$60000"},
//   {name: "Lancer", price: "$75000"},
// ]

export default App;
