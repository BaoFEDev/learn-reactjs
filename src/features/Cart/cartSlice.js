import { CART_ITEMS } from "constants/common";
const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItems: JSON.parse(localStorage.getItem(CART_ITEMS)) || [],
  },
  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },
    addToCart(state, action) {
      // newItem = { id,product,quantity }
      const newItem = action.payload;
      const index = state.cartItems.findIndex((x) => x.id === newItem.id);
      if (index >= 0) {
        state.cartItems[index].quantity += newItem.quantity;
      } else {
        state.cartItems.push(newItem);
      }
      localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      //check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity = quantity;
      }
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((x) => x.id !== id);
      localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, action) {
      const { id } = action.payload;
      //check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity--;
        if (state.cartItems[index].quantity <= 0) {
          state.cartItems = state.cartItems.filter((x) => x.id !== id);
        }
        localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
      }
    },
    increaseQuantity(state, action) {
      const { id } = action.payload;
      //check if product is available in cart
      const index = state.cartItems.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItems[index].quantity++;
      }
      localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    },

    // changeQuantity(state, action) {
    //   const { id, value } = action.payload;
    //   //check if product is available in cart
    //   const index = state.cartItems.findIndex((x) => x.id === id);
    //   if (index >= 0) {
    //     // state.cartItems[index].quantity = parseInt(value === "" ? 0 : value);
    //     state.cartItems[index].quantity = parseInt(value === "" ? "" : value);
    //     if (state.cartItems[index].quantity <= 0) {
    //       state.cartItems = state.cartItems.filter((x) => x.id !== id);
    //     }
    //   }
    //   localStorage.setItem(CART_ITEMS, JSON.stringify(state.cartItems));
    // },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  changeQuantity,
} = actions;
export default reducer;
