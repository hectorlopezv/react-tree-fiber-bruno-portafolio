import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./three-elements";

const container = document.getElementById("root");
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
