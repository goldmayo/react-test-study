import React from "react";
import ReactDOM from "react-dom";

import App from "./app/app";
import { HabitPresenter } from "./app/service/habit_presenter";

import "./index.css";

const habitPresenter = new HabitPresenter(
  [
    { id: "1", name: "reading", count: 0 },
    { id: "2", name: "running", count: 0 },
    { id: "3", name: "coding", count: 0 },
  ],
  6
);

ReactDOM.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>,
  document.getElementById("root")
);
