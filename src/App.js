import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/TaskCard.css";
import AddTask from "./Component/AddTask";
import ListTask from "./Component/ListTask";
import React from "react";

function App() {
  return (
    <div className="container">
      <AddTask />
      <ListTask  />
    </div>
  );
}

export default App;
