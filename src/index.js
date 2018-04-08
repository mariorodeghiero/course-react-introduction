import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Card from "./components/Card";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

ReactDOM.render(<Card />, document.getElementById("card"));
registerServiceWorker();
