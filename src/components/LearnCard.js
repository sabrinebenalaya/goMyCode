import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../css/learnCard.css";


function LearnCard() {
  return (
    <Card className="text-center container cu">
      <Card.Header>Learning</Card.Header>
      <Card.Body>
        <Card.Title>Learne react with GoMyCode</Card.Title>
        <Card.Text>
          We are here to assist you and support you. So, don't think twice to
          contact us.
        </Card.Text>
        <Button variant="primary">Contact Us</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Copyright 2022</Card.Footer>
    </Card>
  );
}

export default LearnCard;
