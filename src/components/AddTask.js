import React, { Component } from "react";
import "../scss/AddTask.scss";

class AddTask extends Component {
  state = {
    text: "",
    priority: "Low"
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  hideAddTaskAndClearInput = () => {
    this.setState({
      text: "",
      priority: "Low"
    });
    this.props.hideAddTask();
    document.getElementById("addTaskInput").blur();
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      const task = {
        text: this.state.text,
        priority: this.state.priority,
        date: Date.now(),
        type: this.props.typeToAdd
      };
      this.props.addTask(task);
      this.hideAddTaskAndClearInput();
    }
  };

  render() {
    const typeToAdd =
      this.props.typeToAdd && this.props.typeToAdd === "todo"
        ? "ToDo"
        : this.props.typeToAdd === "inprogress"
        ? "InProgress"
        : this.props.typeToAdd === "completed"
        ? "Completed"
        : "Backlog";

    return (
      <div id="AddTask" className="AddTask">
        <h2>Add {typeToAdd}</h2>
        <button
          className="hide-add-task-button"
          onClick={this.hideAddTaskAndClearInput}
        >
          &times;
        </button>

        <form onSubmit={this.onSubmit}>
          <input
            id="addTaskInput"
            className="add-task-input"
            type="text"
            name="text"
            placeholder={`Pin your ${typeToAdd} task...`}
            onChange={this.onChange}
            value={this.state.text}
          />
          <div className="add-task-radio">
            <span>Priority:</span>
            <label>
              <input
                type="radio"
                value="Low"
                name="priority"
                checked={this.state.priority === "Low"}
                onChange={this.onChange}
              />
              Low
            </label>
            <label>
              <input
                type="radio"
                value="Medium"
                name="priority"
                checked={this.state.priority === "Medium"}
                onChange={this.onChange}
              />
              Medium
            </label>
            <label>
              <input
                type="radio"
                value="High"
                name="priority"
                checked={this.state.priority === "High"}
                onChange={this.onChange}
              />
              High
            </label>
          </div>
          <button type="submit">Add {typeToAdd}</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
