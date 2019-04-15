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
    <section className="Completed">
      <button onClick={showAddTask.bind(this, "completed")}>Add</button>
      <div>Completed</div>
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
