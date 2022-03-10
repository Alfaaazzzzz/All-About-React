// import React, {Component} from 'react';
// import './App.css';
import { connect } from "react-redux";
import { getUsersRequest,createUsersRequest } from "../actions/users";
import NewUserForm from "./NewUserForm";
import UsersList from "./UsersList";

function App(props) {
  props.getUsersRequest();
  const users = props.users;

  const handleSubmit=({firstName, lastName})=>{
    console.log(firstName, lastName);
    props.createUsersRequest({})
  }

  return (
      <div style={{ margin: "0 auto", padding: "20px", maxWidth: "600px" }}>
        <NewUserForm onSubmit={handleSubmit} />
        <UsersList users={users.items} />
      </div>
  );
}

// class App extends Component {
//   constructor(props){
//       super(props);

//       this.props.getUsersRequest();
//   }
//   render(){
//     return(
//       <div>
//         test
//       </div>
//     )
//   }

// }

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUsersRequest
})(App);
