import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import "./global.css";

const GlobalEnhancements = () => {
  useEffect(() => {
    document.documentElement.classList.add("ewc-marketing");
    return () => document.documentElement.classList.remove("ewc-marketing");
  }, []);

  return null;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalEnhancements />
    <App />
  </React.StrictMode>
);
