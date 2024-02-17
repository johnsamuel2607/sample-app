import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./App.css";

const Cardd = ({ name, score, maxScore, onAddScore, onRejoin, users }) => {
  const [amount, setAmount] = useState("");
  const [rejoinEnabled, setRejoinEnabled] = useState(false);

  const handleAddScore = () => {
    if (score < maxScore) {
      const amountToAdd = parseInt(amount, 10) || 1;
      onAddScore(name, amountToAdd);
      setAmount("");
    } else {
      setRejoinEnabled(true);
      console.log(`User ${name} has reached the max score of ${maxScore}`);
    }
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleRejoin = () => {
    const lowestScore = Math.min(
      ...users.filter((user) => user.name !== name).map((user) => user.score)
    );
    onRejoin(name, lowestScore);
    setRejoinEnabled(false);
  };

  let color;
  if (score < 100) {
    color = "green";
  } else if (score < 200) {
    color = "yellow";
  } else {
    color = "red";
  }

  const rejoinButtonDisabled = !rejoinEnabled;

  return (
    <Card border="primary" style={{ width: "18rem" }}>
      <Card.Header className="name" style={{ backgroundColor: color }}>
        {name}
      </Card.Header>
      <Card.Body>
        <Card.Title>Remininng Score {maxScore - score}</Card.Title>

        <Card.Title>
          {" "}
          <p>Score: {score}</p>
        </Card.Title>
        <Card.Title>
          {" "}
          <p>Max Score: {maxScore}</p>
        </Card.Title>
        <InputGroup className="mb-3">
          <Form.Control
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter a score amount"
          />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={handleAddScore}
          >
            Add
          </Button>
        </InputGroup>

        {score >= 250 && (
          <button
            type="button"
            onClick={handleRejoin}
            disabled={rejoinButtonDisabled}
          >
            Rejoin
          </button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Cardd;
