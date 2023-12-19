import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart";
import authSlice from "./auth";

const store = configureStore({
  reducer: {
    cartSlice,
    authSlice,
  },
});
export default store;
