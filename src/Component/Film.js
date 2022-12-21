import React from "react";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import "../res/App.css";
function Film({ movie }) {
  return (
    <Card className="containerMovie">
      <Card.Img
        variant="top"
        src={movie.poster}
        style={{ width: "100%", height: "500px" }}
      />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.decription}</Card.Text>
        <ReactStars
          count={5}
          size={24}
          edit={false}
          activeColor="#ffd700"
          value={movie.rate}
        />
      </Card.Body>
    </Card>
  );
}

export default Film;
