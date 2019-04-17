import React from "react";
import Moment from "react-moment";
import "../scss/Task.scss";

const Tasks = ({ tasks, moveTaskLeft, moveTaskRight, deleteTask }) => {
  const tasksMap =
    tasks &&
    tasks.map(task => {
      const taskPriority =
        task.priority && task.priority === "Medium"
          ? "task-priority-medium"
          : task.priority === "High"
          ? "task-priority-high"
          : "task-priority-low";

      return (
        <div className="Task" key={task.date}>
          <div className={taskPriority}>
            <div>
              {task.type !== "backlog" ? (
                <button
                  className="left-button"
                  onClick={moveTaskLeft.bind(this, task)}
                >
                  &larr;
                </button>
              ) : null}
              {task.type !== "completed" ? (
                <button
                  className="right-button"
                  onClick={moveTaskRight.bind(this, task)}
                >
                  &rarr;
                </button>
              ) : null}
              <div>
                <button
                  className="delete-button"
                  onClick={deleteTask.bind(this, task)}
                >
                  &times;
                </button>
              </div>
              {task.text}
            </div>
            <div className="moment">
              <Moment format="YYYY/MM/DD hh:mma">{task.date}</Moment>
            </div>
          </div>
        </div>
      );
    });

  return <div className="Tasks">{tasksMap}</div>;
};

export default Tasks;
