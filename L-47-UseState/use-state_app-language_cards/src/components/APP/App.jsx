import CardContainer from "../CardsContainer/CardContainer";
import { words } from "../data/words";
function App() {
  return (
    <div>
      <CardContainer wordsArray={words} />
    </div>
  );
}

export default App;
