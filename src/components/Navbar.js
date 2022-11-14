import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/nav.css";

import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <Nav className="flex-column">
      <Nav.Link className="CostumerNav" eventKey="link-1">
        {" "}
        Drilling conversions
      </Nav.Link>

      <Nav.Link className="CostumerNav" eventKey="link-1">
        {" "}
        Production conversions
      </Nav.Link>
      <Nav.Link className="CostumerNav" eventKey="link-2">
        {" "}
        Force and Power conversions
      </Nav.Link>
      <Nav.Link className="CostumerNav" href="/home">
        {" "}
        Fluid conversions
      </Nav.Link>
      <Nav.Link className="CostumerNav" eventKey="link-1">
        {" "}
        Gas conversions
      </Nav.Link>
      <Nav.Link className="CostumerNav" eventKey="link-2">
        {" "}
        General conversions
      </Nav.Link>
    </Nav>
  );
}

export default Navbar;
