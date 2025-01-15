import React from "react";
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';//import css of toastify from its document ok..
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <BrowserRouter future={{ v7_relativeSplatPath: true }}>
    <ToastContainer/>
    <App />
  </BrowserRouter>
);
