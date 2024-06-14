import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { ReduxDemoApp } from "./App";
import reportWebVitals from "./reportWebVitals";
//import { store } from "./Redux/store";
import { deposit, withdraw } from "./Redux/action";
import { Provider } from "react-redux";
import { store } from "./State/store/store";

// console.log("store", store);
console.log(store.getState());
// store.subscribe(() => {
//   console.log("current state", store.getState());
// });

// // console.log("state", store.getState());
// store.dispatch(deposit(1000));
// // console.log("state", store.getState());
// store.dispatch(withdraw(500));
// //console.log("state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
    {/* <ReduxDemoApp /> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
