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
    <section className="BoardCategories ToDo">
      <button onClick={showAddTask.bind(this, "todo")}>Add ToDo</button>
      <h2>ToDo</h2>
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
