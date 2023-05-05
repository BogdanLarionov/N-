import User from "./User";
import { users } from "../data/users";
import Product from "./Product";
import { products } from "../data/products";

function App() {
  return (
    // пропсы
    <div>
      {/* <User firstname="Oleg" lastname="Petrov" age="50" />
      <User firstname="Bogdan" lastname="Larionov" age="32" />
      <User firstname="Alena" lastname="Larionova" age="33" /> */}
      {/* {users.map((element) => (
        <User
          firstname={element.firstname}
          lastname={element.lastname}
          age={element.age}
        />
      ))} */}
      <h2>User</h2>
      {users.map((el) => (
        <User {...el} key={el.id} />
      ))}
      <h2>Product</h2>
      {products.map((el) => (
        <Product {...el} key={el.id} />
      ))}
    </div>
  );
}

export default App;
