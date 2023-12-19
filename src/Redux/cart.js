import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartItems: JSON.parse(window.localStorage.getItem("cart")) || [],
  openCart: false,
};
const cartSlice = createSlice({
  initialState,
  name: "cartSlice",
  reducers: {
    // open cart
    openCart: (state) => {
      state.openCart = true;
    },
    // close cart
    closeCart: (state) => {
      state.openCart = false;
    },
    // add to cart
    addToCart: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
        toast.success(`${action.payload.title} QTY Increased`);
      } else {
        const temp = { ...action.payload, quantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} تم اضافتة للعربة`);
      }
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // remove from cart :
    removeFromCart: (state, action) => {
      const newItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = newItems;
      toast.success(`${action.payload.title} تم حذفة من العربة`);
      window.localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    // increase Quantity
    increaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        state.cartItems[index].quantity++;
        toast.success(`${action.payload.title} تم زيادة كميته`);
      }
    },
    // decrease QTY
    decreaseQTY: (state, action) => {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (state.cartItems[index].quantity > 1) {
          state.cartItems[index].quantity -= 1;
          toast.success(`${action.payload.title} تم انقاص`);
        }
      }
    },
    // clear
    clearCart: (state) => {
      state.cartItems = [];
      window.localStorage.setItem("cart", state.cartItems);
      toast.success("تم تفريغ العربة بنجاح");
    },
  },
});
export const {
  openCart,
  closeCart,
  addToCart,
  removeFromCart,
  increaseQTY,
  decreaseQTY,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
