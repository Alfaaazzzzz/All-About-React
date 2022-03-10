import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const NewUserForm = (props) => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
  const [name, setName] = useState({firstName:'',lastName:''});
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.onSubmit({
        firstName:name.firstName,
        lastName:name.lastName
    })

    setName({firstName:'',lastName:''})
  };

  const handleFirstNameChange = (e) => {
    const firstName = e.target.value;
    setName({firstName:firstName,lastName:name.lastName});
  };

  const handleLastNameChange=(e)=>{
      const lastName= e.target.value;
      setName({firstName:name.firstName,lastName:lastName})
  }
  return (
      <Form onSubmit={formSubmitHandler}>
        <FormGroup>
          <Label >Fisrt Name</Label>
          <Input required onChange={handleFirstNameChange} value={name.firstName} />
        </FormGroup>
        <FormGroup>
          <Label >Last Name</Label>
          <Input required onChange={handleLastNameChange} value={name.lastName} />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            create
          </Button>
        </FormGroup>
      </Form>
  );
};

export default NewUserForm;
