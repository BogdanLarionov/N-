import React from "react";
import Task from "../Task/Task";

export default function TaskContainer({ tasks }) {
  return (
    <div>
      {/* tasks.length!==0 */}
      {tasks[0] ? tasks.map((el) => <Task {...el} key={el.id} />) : "No tasks"}
    </div>
    // key={el.id} - keyPro - уникальное значение
  );
}
