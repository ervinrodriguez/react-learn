import React from "react";
import ReactDOM from "react-dom";

import App, { App2 } from "./App";

/**ReactDOM.render(WHAT YOU WANT TO SHOW, WHERE TO SHOW IT) */
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
