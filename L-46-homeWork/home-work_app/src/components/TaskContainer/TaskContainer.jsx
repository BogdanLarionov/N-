import React from "react";
import Task from "../Task/Task";

export default function TaskContainer({ tasks }) {
  return (
    <div>
      {/* tasks.length!==0 */}
      {tasks[0]
        ? tasks
            .sort((a, b) => a.done - b.done)
            // .sort((a, b) => b.done - a.done)
            .map((el) => <Task {...el} key={el.id} />)
        : " - No tasks"}
    </div>
    // key={el.id} - keyPro - уникальное значение
  );
}
