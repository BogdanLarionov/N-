import React from "react";
import style from "./index.module.css";
import Task from "../Task";

export default function TasksContainer({ tasks }) {
  // console.log(tasks);

  return (
    <div className={style.tascs_container_style}>
      {tasks.map((el) => (
        <Task {...el} key={el.id} />
      ))}
    </div>
  );
}
