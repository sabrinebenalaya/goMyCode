import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

function FormAddMovie({ addHandelMovie, handleClose }) {
  const [newMovie, setNewMovie] = useState({
    id: "",
    title: "",
    poster: "",
    decription: "",
    rate: 0,
    bdAnonce: "",
  });

  const handelChange = (event) => {
    setNewMovie({
      ...newMovie,
      id: uuidv4(),
      [event.target.name]: event.target.value,
    });
  };
  const handelAddMovie = (e) => {
    e.preventDefault();
    addHandelMovie(newMovie);
    handleClose();
  };

  return (
    <Form onSubmit={handelAddMovie}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your movie name"
          name="title"
          onChange={handelChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>decription</Form.Label>
        <Form.Control
          type="text"
          placeholder="decription"
          name="decription"
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>rating</Form.Label>
        <Form.Control
          type="number"
          placeholder="number"
          name="rate"
          min={1}
          max={5}
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>poster</Form.Label>
        <Form.Control
          type="text"
          placeholder="image"
          name="poster"
          onChange={handelChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Bande Annonce</Form.Label>
        <Form.Control
          type="text"
          placeholder="Bonde Anonce"
          name="bdAnonce"
          onChange={handelChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormAddMovie;
