import React, { Component } from "react";
import "../scss/Board.scss";
import Backlog from "./Backlog";
import ToDo from "./ToDo";
import InProgress from "./InProgress";
import Completed from "./Completed";
import AddTask from "./AddTask";

class Board extends Component {
  state = {
    backlog: [],
    todo: [],
    inprogress: [],
    completed: [],
    typeToAdd: ""
  };

  componentDidMount() {
    if (localStorage.getItem("brucker-board")) {
      this.setState(JSON.parse(localStorage.getItem("brucker-board")));
    } else {
      localStorage.setItem("brucker-board", JSON.stringify(this.state));
    }
  }

  autoSave = () => {
    localStorage.setItem("brucker-board", JSON.stringify(this.state));
  };

  addTask = task => {
    this.setState(
      {
        [task.type]: [...this.state[task.type], task]
      },
      () => this.autoSave()
    );
  };

  showAddTask = type => {
    this.setState({
      typeToAdd: type
    });
    document.getElementById("AddTask").style.display = "block";
    document.getElementById("Board").style.height = "80vh";
  };

  hideAddTask = () => {
    document.getElementById("AddTask").style.display = "none";
    document.getElementById("Board").style.height = "100vh";
  };

  moveTaskLeft = task => {
    const newTask = {};
    newTask.text = task.text;
    newTask.date = task.date;
    switch (task.type) {
      case "todo":
        newTask.type = "backlog";
        break;
      case "inprogress":
        newTask.type = "todo";
        break;
      case "completed":
        newTask.type = "inprogress";
        break;
      default:
        newTask.type = "backlog";
        break;
    }
    const removedFromTaskArray = this.state[task.type].filter(
      item => task.date !== item.date
    );
    this.setState(
      {
        [task.type]: removedFromTaskArray,
        [newTask.type]: [...this.state[newTask.type], newTask]
      },
      () => this.autoSave()
    );
  };

  moveTaskRight = task => {
    const newTask = {};
    newTask.text = task.text;
    newTask.date = task.date;
    switch (task.type) {
      case "backlog":
        newTask.type = "todo";
        break;
      case "todo":
        newTask.type = "inprogress";
        break;
      case "inprogress":
        newTask.type = "completed";
        break;
      default:
        newTask.type = "backlog";
        break;
    }
    const removedFromTaskArray = this.state[task.type].filter(
      item => task.date !== item.date
    );
    this.setState(
      {
        [task.type]: removedFromTaskArray,
        [newTask.type]: [...this.state[newTask.type], newTask]
      },
      () => this.autoSave()
    );
  };

  deleteTask = task => {
    const removedFromTaskArray = this.state[task.type].filter(
      item => task.date !== item.date
    );
    this.setState(
      {
        [task.type]: removedFromTaskArray
      },
      () => this.autoSave()
    );
  };

  render() {
    return (
      <main id="Board" className="Board">
        <AddTask
          typeToAdd={this.state.typeToAdd}
          addTask={this.addTask}
          hideAddTask={this.hideAddTask}
        />
        <Backlog
          moveTaskLeft={this.moveTaskLeft}
          moveTaskRight={this.moveTaskRight}
          showAddTask={this.showAddTask}
          deleteTask={this.deleteTask}
          tasks={this.state.backlog}
        />
        <ToDo
          moveTaskLeft={this.moveTaskLeft}
          moveTaskRight={this.moveTaskRight}
          showAddTask={this.showAddTask}
          deleteTask={this.deleteTask}
          tasks={this.state.todo}
        />
        <InProgress
          moveTaskLeft={this.moveTaskLeft}
          moveTaskRight={this.moveTaskRight}
          showAddTask={this.showAddTask}
          deleteTask={this.deleteTask}
          tasks={this.state.inprogress}
        />
        <Completed
          moveTaskLeft={this.moveTaskLeft}
          moveTaskRight={this.moveTaskRight}
          showAddTask={this.showAddTask}
          deleteTask={this.deleteTask}
          tasks={this.state.completed}
        />
      </main>
    );
  }
}

export default Board;
