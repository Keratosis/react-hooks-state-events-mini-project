import React from "react";

function Task({text , category}) {
  console.log(text, category)
  return (
    <div className="task">
      <div className="label">hey{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
