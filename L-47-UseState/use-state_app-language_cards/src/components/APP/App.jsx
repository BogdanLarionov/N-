import AddPostForm from "../AddPostForm/AddPostForm";
import CardContainer from "../CardsContainer/CardContainer";
import Triggers from "../Triggers/Triggers";
import { words } from "../data/words";
import { useState } from "react";
function App() {
  const [cards, setCards] = useState(words);

  const chenge_toEng = () => {
    setCards(
      cards.map((el) => {
        el.lang = "eng";
        return el;
      })
    );
  };

  const chenge_toRus = () => {
    setCards(
      cards.map((el) => {
        el.lang = "rus";
        return el;
      })
    );
  };

  // Метод-1

  const change_lang = (id) => {
    setCards(
      cards.map((el) => {
        if (el.id === id) {
          el.lang = el.lang === "rus" ? "eng" : "rus";
        }
        return el;
      })
    );
  };

  // Метод-2

  // const change_lang = (id) => {
  //   cards[id - 1].lang = cards[id - 1].lang === "rus" ? "eng" : "rus";
  //   setCards([...cards]);
  // };

  return (
    <div>
      <AddPostForm />
      APP:
      <CardContainer wordsArray={cards} change_lang={change_lang} />
      <Triggers chenge_toEng={chenge_toEng} chenge_toRus={chenge_toRus} />
    </div>
  );
}

export default App;
