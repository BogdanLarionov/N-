import React from "react";
import style from "./Worker.module.css";
import TaskContainer from "../TaskContainer/TaskContainer";

export default function Worker({
  id,
  firstname,
  lastname,
  position,
  in_office,
  avatar,
  tasks,
}) {
  // const backgroundColor = {
  //   backgroundColor: in_office ? "lightblue" : "lightgray",
  //   color: in_office ? '' : 'blue',
  // fontSize: firstname === "Oleg" ? "25px" : "";
  // };

  const blueText = {
    color: in_office ? "" : "blue",
    fontSize: firstname === "Oleg" ? "10px" : "",
  };

  // // Оператор нулевого слияния!
  const img_url = avatar ?? "./media/no_face.jpeg"; // проверка наличия фото (null, undefined)

  // const img_url = avatar ? avatar : "./media/no_face.jpeg"; // проверка наличия фото

  return (
    <div
      className={`${style.worker_card} ${
        in_office ? "" : style.grey_background
      } `}>
      {/* // <div className={(style.worker_card = backgroundColor)}> */}
      <p style={blueText}> ID:{id}</p>
      <p style={blueText}> Firstname: {firstname}</p>
      <p style={blueText}> Lastname: {lastname}</p>
      <p style={blueText}> Position: {position}</p>
      <img
        // src={avatar}
        src={img_url}
        alt={`Avatar of ${firstname} ${lastname}`}
        className={style.img}></img>
      Tasks:
      <TaskContainer tasks={tasks} />
    </div>
  );
}

// У работников с   in_office: false поменять цвет текста на синий
