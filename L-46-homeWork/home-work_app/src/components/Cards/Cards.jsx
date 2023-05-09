import React from "react";
import Worker from "../Worker/Worker";
import { workers } from "../../data/workers";

export default function Cards() {
  // export default function Cards({workers}) {
  // const active_vorkers = workers.filter((el) => el.in_office);
  return (
    <div>
      Card
      {workers.map((el) => (
        <Worker {...el} key={el.id} />
      ))}
    </div>
  );
}
