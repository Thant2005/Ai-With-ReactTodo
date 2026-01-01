import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider
    router={router}
    future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
  />
);
