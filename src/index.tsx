import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
// import SimpleHabit from "./components/simpleHabit";
import { HabitPresenter } from "./service/habit_presenter";

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
    {/* <SimpleHabit /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
