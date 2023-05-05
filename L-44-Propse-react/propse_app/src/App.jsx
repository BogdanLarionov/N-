import { todo } from "./data";
import ToDoContainer from "./toDoContainer";

function App() {
  // console.log(todo);
  return (
    <div>
      <ToDoContainer
        // propers_1={"test_1"}
        // propers_2={"test_2"}
        // propers_3={"test_3"}
        // propers_4={"test_4"}
        todo={todo}
      />
    </div>
  );
}

export default App;
