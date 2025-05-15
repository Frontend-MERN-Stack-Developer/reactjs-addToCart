import { useContext, useState } from "react";
import fruitList from "./../../data";
import "./Products.css";
import { totalPrice } from "../../Features/CartReducer";
import { CartContext } from "../../Features/ContextProvider";

const Products = ({ setProductId }) => {
  const { cart } = useContext(CartContext);
  const [carts, setCarts] = useState([]);

  const handleAddToCart = (id) => {
    const selectedFruit = fruitList.find((fruit) => fruit.id === id); // Find the fruit by ID
    if (!carts.some((item) => item.id === id)) {
      setCart([...carts, selectedFruit]); // Add to cart
      setProductId(selectedFruit); // Pass selected fruit back to parent component
    }
  };

  return (
    <div className="row">
      {fruitList.map((Product, id) => (
        <div key={id} className="col-3">
          <div className="card">
            <div className="img-box">
              <img src={Product.image} alt={Product.name} />
            </div>
            <h2>{Product.name}</h2>
            <p>
              Price: <b>${Product.price}</b>
            </p>
            <button className="btn" onClick={() => handleAddToCart(Product.id)}>
              {carts.some((item) => item.id === Product.id)
                ? "Added"
                : "Add to Cart"}
            </button>
          </div>
        </div>
      ))}

      {/* Render cart */}
      <h2>Cart Items:</h2>
      <h3>total Price {totalPrice()}</h3>
      {cart.length > 0 ? (
        <ul>
          {cart.map((fruit, index) => (
            <li key={index}>
              {fruit.name} - ${fruit.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Products;
