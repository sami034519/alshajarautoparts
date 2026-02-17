import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [], // {id, title, price, quantity, image}
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload; // {id, title, price, image}
      const existingItem = state.cartItems.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      state.totalQuantity = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter(item => item.id !== id);

      state.totalQuantity = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find(i => i.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(i => i.id !== id);
        }
      }

      state.totalQuantity = state.cartItems.reduce(
        (acc, item) => acc + item.quantity,
        0
      );
      state.totalPrice = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addToCart, removeFromCart, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
