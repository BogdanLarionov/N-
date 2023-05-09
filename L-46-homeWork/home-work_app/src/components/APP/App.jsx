import style from "./App.module.css";
import Cards from "../Cards/Cards";
// import { workers } from "../../data/workers";

// const active_vorkers = workers.filter(el => el.in_office === true) - true
// const active_vorkers = workers.filter(el => el.!in_office ) - не true (false)
// --------------------
// const active_vorkers = workers.filter((el) => el.in_office);
// console.log(active_vorkers); //(4) [{…}, {…}, {…}, {…}]

function App() {
  return (
    <div className={style.main_container}>
      {/* <Cards workers={workers} /> */}
      <Cards />
      {/* {workers
        // .filter((el) => el.in_office)
        .map((el) => (
          <Worker {...el} key={el.id} />
        ))} */}
      {/* {active_vorkers.map((el) => (
        <Worker {...el} key={el.id} /> */}
    </div>
  );
}

export default App;
