export const totalPrice = () => {
  return cart.reduice((sum, total) => sum + Product.quantity * totalPrice, 0);
};

const CartReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.Product];
    default:
      state;
  }
};

export default CartReducer;
