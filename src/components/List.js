import React, { useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import "./List.css"
import ListItem from "./ListItem";

function List() {
  const [tasks, setTasks] = useState([
    "Send Ryan a BLAHAJ",
    "Heckle Ryan on stream when he concentrating",
    "Pretend he doesn't exist when he needs something urgent",
  ]);
  const [newTask, setNewTask] = useState("")

  const listItems = tasks.map((task) =>
    <ListItem key={task} item={task} />
  );

  function addToTasks(task) {
    const currentTasks = [...tasks]
    currentTasks.push(task)
    setTasks(currentTasks)
  }

  return (
    <div className="list-container">
      <h2 className="list-header">My Tasks for 2021</h2>
      <Row>
        <Col xs={12} md={9}>
        <input
          placeholder="Type a new task here..."
          className="list-input"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        </Col>
        <Col xs={12} md={3}>
          <Button size="lg" block className="submit-button" onClick={() => {addToTasks(newTask); setNewTask("")}}>Add Task</Button>
        </Col>
      </Row>
      {listItems}
    </div>
  );
}

export default List;
