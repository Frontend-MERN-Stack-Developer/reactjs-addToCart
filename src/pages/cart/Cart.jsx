// import './Cart.css';

const Cart = ({ cartItems, setCartProducts }) => {
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartProducts(updatedCart);
  };

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
