import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store";
// react hot toast
import { Toaster } from "react-hot-toast";
import "./index.css";
// i18next
import "./i18n";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
