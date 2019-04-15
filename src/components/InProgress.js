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
    <section className="InProgress">
      <button onClick={showAddTask.bind(this, "inprogress")}>Add</button>
      <div>InProgress</div>
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
