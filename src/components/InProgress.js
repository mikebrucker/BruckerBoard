import React from "react";
import Tasks from "./Tasks";

const InProgress = ({
  tasks,
  showAddTask,
  moveTaskLeft,
  moveTaskRight,
  deleteTask
}) => {
  return (
    <section className="BoardCategories InProgress">
      <button onClick={showAddTask.bind(this, "inprogress")}>
        Add InProgress
      </button>
      <h2>InProgress</h2>
      <Tasks
        tasks={tasks}
        moveTaskLeft={moveTaskLeft}
        moveTaskRight={moveTaskRight}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default InProgress;
