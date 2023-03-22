import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
        <ToastContainer />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
