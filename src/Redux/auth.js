import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  openForm: false,
  isLogin: JSON.parse(window.localStorage.getItem("auth")) || false,
  token: JSON.parse(window.localStorage.getItem("token")) || null,
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
      toast.success("تم تسجيل الدخول بنجاح");
    },
    logout: (state) => {
      state.isLogin = false;
      window.localStorage.setItem("auth", JSON.stringify(state.isLogin));
      window.localStorage.removeItem("token");
      toast.success("تم تسجيل الخروج بنجاح");
    },
    addToken: (state, action) => {
      state.token = action.payload;
      window.localStorage.setItem("token", JSON.stringify(state.token));
    },
    openForm: (state) => {
      state.openForm = true;
    },
    closeForm: (state) => {
      state.openForm = false;
    },
  },
});
export const { login, logout, openForm, closeForm, addToken } =
  authSlice.actions;
export default authSlice.reducer;
