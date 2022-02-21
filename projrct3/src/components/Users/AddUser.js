import React, { useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef= useRef()
  const ageInputRef= useRef()

  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredUsername=(nameInputRef.current.value)
    const enteredAge=(ageInputRef.current.value)
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge)

    props.addingUser(enteredUsername, enteredAge);
    nameInputRef.current.value=''
    ageInputRef.current.value=''
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onCancel={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
