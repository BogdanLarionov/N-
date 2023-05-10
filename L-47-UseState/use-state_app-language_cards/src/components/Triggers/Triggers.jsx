import React from "react";
import style from "./Triggers.module.css";

export default function Triggers({ chenge_toEng, chenge_toRus }) {
  return (
    <div className={style.triggers}>
      Triggers
      <button onClick={chenge_toEng}>Eng</button>
      <button onClick={chenge_toRus}>Rus</button>
    </div>
  );
}
