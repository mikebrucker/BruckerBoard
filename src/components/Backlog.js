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
    <section className="Backlog">
      <button onClick={showAddTask.bind(this, "backlog")}>Add</button>
      <div>Backlog</div>
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
