import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

import "../CSS/TaskCard.css";

import { useDispatch } from "react-redux";
import { deleteTask, doneAndundone, updateTask } from "../Redux/Actions";

function Task({ task }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const HandelDeleteTask = () => dispatch(deleteTask(task));

  const handelDone = () => dispatch(doneAndundone(task.id));

  const handelChange = (e) => setText(e.target.value);

  const handleUpdate = (e) => {
    handelChange(e);
    dispatch(updateTask(task.id, text));
    handleClose();
  };
  return (
    <>
      <div>
        <Card className="cart taskCart">
          <Card.Body>
            <h1 style={{ textDecoration: task.done ? "line-through" : "none" }}>
              {task.description}
            </h1>
            <div>
              <input   type="checkbox" onChange={handelDone}   />
              <label> Done</label>
            </div>
            <div>
              <Button variant="danger" onClick={HandelDeleteTask}>
                Delete
              </Button>
              <Button variant="primary" onClick={handleShow}>
                update
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            placeholder={task.description}
            onChange={handelChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Task;
