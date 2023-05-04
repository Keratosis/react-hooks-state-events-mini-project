import React from "react";
import Task from "./Task";


function TaskList({tasks,category}) {
  console.log(tasks, category)

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
   <Task 
        text={tasks.text}
        category={ category.category}
   />

    </div>
  );
}

export default TaskList;
