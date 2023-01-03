import React from "react";
import Card from "react-bootstrap/Card";
import './App.css';

function UserCard({ us }) {
  return (
    <div className="cardUser">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{us.name}</Card.Title>
          <Card.Title>{us.email}</Card.Title>
          <Card.Title> {us.phone} </Card.Title>
          <Card.Title>
            <a href={us.website}>{us.website}</a>
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UserCard;
