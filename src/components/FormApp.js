import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/formApp.css";
function FormApp() {
  return (
    <Form className="container containerForm">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text  style={{color:"white", fontWeight:"lighter"}}>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group  style={{color:"white", fontWeight:"lighter", textAlign:"left"}} controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit"  style={{backgroundColor: "rgb(237, 235, 235)", color:"blue",marginTop:"10px"}} >
        Log in
      </Button>
    </Form>
  );
}

export default FormApp;
