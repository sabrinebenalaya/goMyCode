import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import copyIcon from "../res/CopyIcon.jpg";
import clearIcon from "../res/ClearIcon.png";

function SearchDiv() {
  return (
    <InputGroup >
      <Form.Control placeholder="Click to insert Value" />
      <InputGroup.Text>
        <img src={copyIcon} alt="copy"></img>
      </InputGroup.Text>
      <InputGroup.Text>
        <img src={clearIcon} alt="clear"></img>
      </InputGroup.Text>
    </InputGroup>
  );
}

export default SearchDiv;
