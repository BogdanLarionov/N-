import User from "../User";
import { users } from "../../data/users";
import TaskContainer from "../TaskContainer";
import style from "./index.module.css";

function App() {
  // const container_style = {
  // display: "grid",
  // // gridTemplateColumns: "repeat(3, 1fr)",
  // gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
  // gap: "1rem",
  // margen: "0",
  // pading: "0",
  // };
  return (
    // <div style={container_style}>
    <div className={style.divApp}>
      {users.map((el) => (
        <User {...el} key={el.id} />
      ))}
      <TaskContainer />
    </div>
  );
}

export default App;
