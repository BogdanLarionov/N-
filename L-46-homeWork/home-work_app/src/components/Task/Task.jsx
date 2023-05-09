import React from "react";

export default function Task({ id, task, done }) {
  // 1
  // const done_style = {
  //   color: "green",
  //   textDecoration: "line-through",
  // };
  // const not_done_style = {
  //   color: "red",
  // };

  // 2
  // const task_style = done ? done_style : not_done_style;

  // 3
  const task_style_ = {
    color: done ? "green" : "red",
    textDecoration: done ? "line-through" : "",
  };

  return (
    // 1
    // <div style={task_style}>

    // 2
    // <div style={done ? done_style : not_done_style}>

    // 3
    <div style={task_style_}>
      {/*  - {task} */}
      <p> - {task}</p>
    </div>
  );
}
