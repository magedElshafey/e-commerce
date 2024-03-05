import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  openForm: false,
  isLogin: JSON.parse(window.localStorage.getItem("auth")) || false,

  myData: {},
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
    },
    logout: (state) => {
      state.isLogin = false;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
      window.localStorage.removeItem("user");
    },

    openForm: (state) => {
      state.openForm = true;
    },
    closeForm: (state) => {
      state.openForm = false;
    },
    addMyData: (state, action) => {
      state.myData = action.payload;
      localStorage.setItem("user", JSON.stringify(state.myData));
    },
  },
});
export const { login, logout, openForm, closeForm, addMyData } =
  authSlice.actions;
export default authSlice.reducer;
