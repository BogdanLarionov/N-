import { useState } from "react";
// import React, { useState } from "react";
// import React, { useState } from "react";
// Для того что-бы обновить состояние кнопок, нужно установить Hook useState!
// https://ru.legacy.reactjs.org/docs/hooks-intro.html

export default function Counter() {
  const [likes, setLikes] = useState(0); // изначальное состояние!
  //   let [likes, setLikes] = useState(0); // изначальное состояние!

  // likes - переменная, которая хранит состояние
  // setLikes - функция, которая отслеживает изминения состояния

  //   let likes = 0;

  const incriment = () => {
    setLikes(likes + 1);
    // setLikes((likes += 1));
    console.log(likes);
  };

  const decriment = () => {
    setLikes(likes - 1);
    // setLikes((likes -= 1));
    console.log(likes);
  };
  return (
    <div>
      <p>{likes}</p>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
    </div>
  );
}
