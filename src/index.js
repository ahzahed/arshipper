import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PagesProvider } from "./context/pages_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <PagesProvider>
      <App />
    </PagesProvider>
  </React.StrictMode>
);
