import React from "react";
import ToDoItem from "./ToDoItem";

// export default function toDoContainer(props) {
// --------------

export default function toDoContainer({ todo }) {
  // console.log(props);
  // console.log(props.todo);
  // --------------

  // const items = props.todo.map((todo) => (
  //   <ToDoItem title={todo.title} descr={todo.descr} />
  // ));

  // --------------

  // const todo = props.todo;

  // --------------

  // const { todo } = props;

  return (
    <div>
      {/* <ToDoItem title={"поченить стол"} descr={"он очень нужен мне"} />
      <ToDoItem title={"поченить стол"} descr={"он очень нужен мне"} />
      <ToDoItem title={"поченить стол"} descr={"он очень нужен мне"} /> */}

      {/* ----------- */}

      {/* {items} */}

      {/* ----------- */}

      {/* {props.todo.map((todo) => (
        <ToDoItem title={todo.title} descr={todo.descr} />
      ))} */}

      {todo.map((todo) => (
        <ToDoItem title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}
