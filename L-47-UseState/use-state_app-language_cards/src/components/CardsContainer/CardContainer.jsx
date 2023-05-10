import React from "react";
import Card from "../Card/Card";
import style from "./CardsContainer.module.css";

export default function CardContainer({ wordsArray, change_lang }) {
  return (
    <div className={style.cards_container}>
      {wordsArray.map((el) => (
        <Card {...el} key={el.id} change_lang={change_lang} />
      ))}
    </div>
  );
}
