import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

// Make dark mode active by default
document.documentElement.classList.add("dark");

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);
