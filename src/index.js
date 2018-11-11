import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ActionPanel from "./components/action-panel";
import * as serviceWorker from "./serviceWorker";

// ReactDOM.render(<App />, document.getElementById("app"));
ReactDOM.render(<ActionPanel />, document.getElementById("action-panel"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
