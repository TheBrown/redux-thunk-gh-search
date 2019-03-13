import React from "react";
import ReactDOM from "react-dom";
import "./components/index.css";

import App from "./containers/App";
import store from "./store";
import { Provider } from "react-redux";

const MyApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById("root"));
