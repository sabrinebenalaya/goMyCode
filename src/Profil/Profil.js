import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Profil = ({ profil, children, handleAlert }) => {
  console.log(handleAlert);
  const handleClick = () => {
    handleAlert(profil.fullName);
  };

  return (
    <Card style={{ width: "18rem", backgroundColor:"beige", margin:"5px", padding:"10px", textAlign:"center"}}>
      <Card.Img variant="top" src={children} style={{ width: "100px", height:"100px"}}/>
      <Card.Body>
        <Card.Title>{profil.fullName}</Card.Title>
        <Card.Text>
          <h2>{profil.bio}</h2>
          <h5>{profil.profession}</h5>
        </Card.Text>
        <Button variant="primary" onClick={handleClick}>
          Show name
        </Button>
      </Card.Body>
    </Card>
  );
};
