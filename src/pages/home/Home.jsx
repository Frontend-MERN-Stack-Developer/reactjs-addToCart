import { useState } from "react";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import Cart from "../cart/Cart";

const Home = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartCount, setCartCount] = useState([1]);

  const handleSetProduct = (product) => {
    if (!cartProducts.find((item) => item.id === product.id)) {
      setCartProducts([...cartProducts, product]); // Add the product only if it's not already in the cart
      console.log("Product added to cart:", product);
    }
  };


  return (
    <>
      <Header cartItemCounter={cartCount} />
      <main id="main" style={{ overflow: "hidden", paddingTop: "100px" }}>
        <div className="container">
          <h1>Home Page</h1>
          <Products setProductId={handleSetProduct} />
          <Cart cartItems={cartProducts} setCartProducts={setCartProducts} />
        </div>
      </main>
    </>
  );
};

export default Home;
