import React from "react";
import Tasks from "./Tasks";

const ToDo = ({
  tasks,
  showAddTask,
  moveTaskLeft,
  moveTaskRight,
  deleteTask
}) => {
  return (
    <section className="ToDo">
      <button onClick={showAddTask.bind(this, "todo")}>Add</button>
      <div>ToDo</div>
      <Tasks
        tasks={tasks}
        moveTaskLeft={moveTaskLeft}
        moveTaskRight={moveTaskRight}
        deleteTask={deleteTask}
      />
    </section>
  );
};

export default ToDo;
