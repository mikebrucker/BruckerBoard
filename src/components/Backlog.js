import React from "react";
import Tasks from "./Tasks";

const Backlog = ({
  tasks,
  showAddTask,
  moveTaskLeft,
  moveTaskRight,
  deleteTask
}) => {
  return (
    <section className="BoardCategories Backlog">
      <button onClick={showAddTask.bind(this, "backlog")}>Add Backlog</button>
      <h2>Backlog</h2>
      <Tasks
        tasks={tasks}
        moveTaskLeft={moveTaskLeft}
        moveTaskRight={moveTaskRight}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default Backlog;
