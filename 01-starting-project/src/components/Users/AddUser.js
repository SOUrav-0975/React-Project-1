import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredName, setenteredName] = useState("");

  const [enteredAge, setenteredAge] = useState("");
  const [error,setError] = useState(); 
   const handleUsers = (event) => {
    event.preventDefault();

    if(enteredName.trim().length === 0 || enteredAge.trim().length === 0){
        setError(
            {
                title:'Invalid Input',
                message:'please enter valid inputs'
            }
        )
        return;
    }
    if(+enteredAge < 1){
        setError(
            {
                title:'Invalid Age',
                message:'please enter valid Age'
            }
        )
       return;
    }
    props.onAddUser(enteredName,enteredAge);
    setenteredName('')
    setenteredAge('')
  };

  
  const nameHandler = (event) => {
    setenteredName(event.target.value);
  };
  const ageHandler = (event) => {
    setenteredAge(event.target.value);
  };
  const errorHandler = () =>{
    setError(null)
  }
  return (
    <div>
   {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={handleUsers}>
        <label htmlFor="name">Username </label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameHandler}
          placeholder="Enter Name"
        />
        <label htmlFor="age">Age </label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={ageHandler}
          placeholder="Enter Age"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
 
  );
};
export default AddUser;
