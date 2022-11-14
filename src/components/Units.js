import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/unit.css'

function Units() {
  return (
    <ListGroup className="invisible-scrollbar">
      <ListGroup.Item>g/cm3</ListGroup.Item>
      <ListGroup.Item>g/L</ListGroup.Item>
      <ListGroup.Item>kg/m3</ListGroup.Item>
      <ListGroup.Item>kg/L</ListGroup.Item>
      <ListGroup.Item>kPa/m</ListGroup.Item>
      <ListGroup.Item>m3/sk</ListGroup.Item>
      <ListGroup.Item>ib/fr3</ListGroup.Item>
      <ListGroup.Item>ib/bbl</ListGroup.Item>
      <ListGroup.Item>psi/ft</ListGroup.Item>
    </ListGroup>
  );
}

export default Units;
