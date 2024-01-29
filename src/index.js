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
// react query
import { QueryClientProvider, QueryClient } from "react-query";
import ScrollToTopAfterChangePage from "./components/utils/ScrollToTopAfterChangePage";
import { BrowserRouter as Router } from "react-router-dom";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTopAfterChangePage />
          <App />
        </Router>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
