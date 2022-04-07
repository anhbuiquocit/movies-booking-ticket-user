import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./@movie-ticket/styles/styles.css";
import "./@movie-ticket/styles/main.css";
import "./@movie-ticket/styles/main.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserLayout } from "./@movie-ticket/layout/userLayout";
import { CustomProvider } from "./@movie-ticket/provider";
ReactDOM.render(
  <CustomProvider>
    <UserLayout />
  </CustomProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
