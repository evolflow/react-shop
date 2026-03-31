import { useState } from "react";

function App() {
  const products = [
    { id: 1, name: "Pizza", price: 10 },
    { id: 2, name: "Burger", price: 8 },
    { id: 3, name: "Pasta", price: 12 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h1>Menu</h1>

      {products.map((product) => {
        return (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}$</p>
            <button onClick={() => addToCart(product)}>
              Add
            </button>
          </div>
        );
      })}

      <h2>Cart:</h2>

      {cart.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
    </div>
  );
}

export default App;