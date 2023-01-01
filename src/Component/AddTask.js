import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";

import { addtask, taskdone, alltask } from "../Redux/Actions";

function AddList() {
  const [newTask, setNewTask] = useState({
    id: uuidv4(),
    description: "",
    done: false,
  });
  const dispatch = useDispatch();

  const HandelNewTask = (e) =>
    setNewTask({
      ...newTask,
      id: uuidv4(),
      description: e.target.value,
      done: false,
    });

  const HandelAddTask = (event) => {
    event.preventDefault();
    dispatch(addtask(newTask));
    setNewTask({ id: "", description: "", done: false });
  };

  const TaskDone = (e) => {
    if (e.target.checked) {
      console.log(true);
      dispatch(taskdone());
    } else {
      console.log(false);
      dispatch(alltask());
    }
  };
  return (
    <div className="inputList">
      <Form onSubmit={HandelAddTask}>
        <Form.Group className="mb-3">
          <Form.Label>New Task</Form.Label>
          <input
            type="text"
            onChange={HandelNewTask}
            value={newTask.description}
          />
        </Form.Group>

        <div className="taskesDone">
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <div>
            <input type="checkbox" onClick={TaskDone} />
            <label> Done</label>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default AddList;
