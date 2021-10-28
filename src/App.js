import { useState, useEffect } from "react";
import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch("https://randomuser.me/api/?results=12"); //Input Ur API
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }
      setAllUsers(userData.results);
      setUsers(userData.results);
    })();
  },[] ); 

    const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }
  
  
  return (
    <div className="App">
      
      <h1>Profile Cards</h1>
      <div className="cards-container-fluid ">
    
      {users.map((user, index) => (
        <ProfileCard key={index} userData={user} />
        ) )
       }
      </div>
    </div>
    
    
  );
}

export default App;
