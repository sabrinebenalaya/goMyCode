import React, { Component } from "react";
import Card from "react-bootstrap/Card";
export default class Profil extends Component {

    render() {
  
    return (
      <Card
        style={{
          width: "18rem",
          backgroundColor: "beige",
          margin: "auto",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.Persone.imgSrc}
          style={{ width: "100px", height: "100px" }}
        />
        <Card.Body>
          <h2> {this.props.Persone.fullName}</h2>
          <h5>{this.props.Persone.profession}</h5>
          <p>{this.props.Persone.bio}</p>
        </Card.Body>


      </Card>
    );
  }
}
