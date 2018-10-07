import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {App} from "./App";
import "./index.css";

import {rootReducer} from "./reducers/index";
import registerServiceWorker from "./registerServiceWorker";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  const {logger} = require("redux-logger");
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
registerServiceWorker();
