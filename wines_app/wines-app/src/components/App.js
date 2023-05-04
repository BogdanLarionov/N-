import Vino from "./Vino";
import { wines } from "../data/winesData";

function App() {
  const main_container_style = {
    display: "grid",
    // gridTemplateColumns: "repeat(6, 1fr)",
    gridTemplateColumns: "repeat(auto-fill, minmax(256px, 1fr))",
    gap: "1rem",
  };
  return (
    <div style={main_container_style}>
      {wines.map((elem) => (
        <Vino {...elem} key={elem.id} />
      ))}
    </div>
  );
}

export default App;
