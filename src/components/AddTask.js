import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.text.length > 0) {
      const task = {
        text: this.state.text,
        date: Date.now(),
        type: this.props.typeToAdd
      };
      this.props.addTask(task);
      this.setState({
        text: ""
      });
      this.props.hideAddTask();
    }
  };

  render() {
    const typeToAdd = this.props.typeToAdd ? this.props.typeToAdd : "";
    return (
      <div id="AddTask" className="AddTask">
        <h2>Add {typeToAdd}</h2>
        <button
          className="hide-add-task-button"
          onClick={this.props.hideAddTask}
        >
          &times;
        </button>

        <form onSubmit={this.onSubmit}>
          <textarea
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.state.text}
          />
          <button type="submit">Add {typeToAdd}</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
