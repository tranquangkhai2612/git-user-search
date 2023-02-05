import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <GithubProvider>
      <App />
    </GithubProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
