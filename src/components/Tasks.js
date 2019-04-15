import React from "react";
import Moment from "react-moment";

const Tasks = ({ tasks, moveTaskLeft, moveTaskRight, deleteTask }) => {
  const tasksMap =
    tasks &&
    tasks.map(task => {
      return (
        <div className="Task" key={task.date}>
          <div>
            {task.type !== "backlog" ? (
              <button
                className="left-button"
                onClick={moveTaskLeft.bind(this, task)}
              >
                &lt;
              </button>
            ) : null}
            {task.text}
            {task.type !== "completed" ? (
              <button
                className="right-button"
                onClick={moveTaskRight.bind(this, task)}
              >
                &gt;
              </button>
            ) : null}
            <button
              className="delete-button"
              onClick={deleteTask.bind(this, task)}
            >
              &times;
            </button>
          </div>
          <Moment format="YYYY/MM/DD">{task.date}</Moment>
        </div>
      );
    });

  return <div className="Tasks">{tasksMap}</div>;
};

export default Tasks;
