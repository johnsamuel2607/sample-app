import React, { useState } from "react";
import Cardd from "./Card";
import "./App.css";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";

const AddUser = () => {
  const [users, setUsers] = useState([]);
  const maxScore = 250;
  const [newUser, setNewUser] = useState("");

  React.useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  // Update local storage whenever users change

  // ... (import and initial code)

  const addScore = (name, amount) => {
    const newUsers = [...users];
    const userIndex = newUsers.findIndex((user) => user.name === name);

    if (newUsers[userIndex].score + amount > maxScore) {
      console.log(`User ${name} has reached the max score of ${maxScore}`);
    } else {
      newUsers[userIndex] = {
        ...newUsers[userIndex],
        score: newUsers[userIndex].score + amount,
      };

      // Find lowest score among other users and update their scores
      const lowestScore = Math.min(
        ...newUsers
          .filter((user) => user.name !== name)
          .map((user) => user.score)
      );
      const updatedUsers = newUsers.map((user) =>
        user.name !== name
          ? { ...user, score: Math.max(user.score, lowestScore) }
          : user
      );

      setUsers(updatedUsers);

      // Store scores in local storage
      const scores = updatedUsers.map((user) => user.score);
      localStorage.setItem("scores", JSON.stringify(scores));
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  };

  // ... (the rest of the code)

  const addUser = () => {
    if (newUser.trim() !== "") {
      setUsers((prevUsers) => [...prevUsers, { name: newUser, score: 0 }]);
      setNewUser("");
    }
  };

  const handleReset =()=>{
    localStorage.removeItem("scores")
    localStorage.removeItem("users")
    window.location.reload();
  }

  return (
    <>
      <div className="container_box">
<div style={{width:"300px"}} className="flex_alin">
      <InputGroup className="mb-4">
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="text"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="Enter new user name"/>
       
          <Button
            variant="primary"
            id="button-addon2"
            onClick={addUser} disabled={newUser.trim() === ""}
          >
            Add User
          </Button>
        </InputGroup>
        </div>
        <div className="flex_alin">
         <Button onClick={handleReset} >Reset</Button>
         </div> 
        <hr />
        <main className="card_box">
          {users.map((user) => (
            <Cardd
              key={user.name}
              name={user.name}
              score={user.score}
              maxScore={maxScore}
              onAddScore={addScore}
              users={users}
            />
          ))}
        </main>
      </div>
    
        
     
     
    </>
  );
};

export default AddUser;
