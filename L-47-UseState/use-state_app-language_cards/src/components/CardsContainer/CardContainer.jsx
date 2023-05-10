import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardContainer({ wordsArray }) {
  return (
    <div className={style.cards_container}>
      {wordsArray.map((el) => (
        <Card {...el} key={el.id} />
      ))}
    </div>
  );
}
