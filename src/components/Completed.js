import React from "react";
import Tasks from "./Tasks";

const Completed = ({
  tasks,
  showAddTask,
  moveTaskLeft,
  moveTaskRight,
  deleteTask
}) => {
  return (
    <section className="BoardCategories Completed">
      <button onClick={showAddTask.bind(this, "completed")}>
        Add Completed
      </button>
      <h2>Completed</h2>
      <Tasks
        tasks={tasks}
        moveTaskLeft={moveTaskLeft}
        moveTaskRight={moveTaskRight}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default Completed;
