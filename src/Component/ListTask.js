import React from "react";
import Task from "./Task";
import "../CSS/TaskCard.css";
import { useSelector } from "react-redux";
function ListTask() {
  const task = useSelector((state) => state);
  return (
    <div className="todolist">
      { task.tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default ListTask;
