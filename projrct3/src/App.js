import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  const AddedUser = (uName, uAge) => {
    const id = Math.random().toString();
    setUserData((preUsersData) => {
      return [...preUsersData, { name: uName, age: uAge, id }];
    });
  };

  return (
    <div>
      <AddUser addingUser={AddedUser} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
