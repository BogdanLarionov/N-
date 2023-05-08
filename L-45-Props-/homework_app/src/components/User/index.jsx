import React from "react";
import style from "./index.module.css";
import TasksContainer from "../TaskContainer";

// диструкторизированные пропсы { id, firstname, lastname, address, salary }
export default function User({
  id,
  firstname,
  lastname,
  address,
  salary,
  tasks,
}) {
  // const user_style = {
  //   border: "1px solid black",
  //   borderRadius: "10px",
  //   padding: "10px",
  //   width: "200px",
  //   margin: "10px",
  //   display: "flex",
  //   flexDirection: "column",
  //   backgroundColor: "lightblue",
  // };

  return (
    // <div style={user_style}>
    <div className={style.user_card}>
      <p className={style.lastnameStyle}>ID: {id}</p>
      <p>First name: {firstname}</p>
      <p>Last name: {lastname}</p>
      <p className={style.addressColor}>Address: {address}</p>
      <p>Salary: {salary}</p>
      <TasksContainer tasks={tasks} />
      {/* передали пропсы! */}
    </div>
  );
}
