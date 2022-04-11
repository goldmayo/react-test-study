import React, { useState, useCallback } from "react";

import { HabitPresenterInterface, HabitElement } from "./service/habit_presenter";

import Header from "./components/header";
import HabitContainer from "./components/habitContainer";

import "./app.css";

type AppProps = {
  presenter: HabitPresenterInterface;
};

const App = ({ presenter }: AppProps) => {
  const [habits, setHabits] = useState<HabitElement[]>(presenter.getHabits());

  const handleIncrement = useCallback(
    (habit: HabitElement) => {
      presenter.increment(habit, setHabits);
    },
    [presenter]
  );

  const handleDecrement = useCallback(
    (habit: HabitElement) => {
      presenter.decrement(habit, setHabits);
    },
    [presenter]
  );

  const handleDelete = useCallback(
    (habit: HabitElement) => {
      presenter.delete(habit, setHabits);
    },
    [presenter]
  );

  const handleAdd = useCallback(
    (name: string) => {
      presenter.add(name, setHabits);
    },
    [presenter]
  );

  const handleReset = useCallback(() => {
    presenter.reset(setHabits);
  }, [presenter]);

  return (
    <>
      <Header totalCount={habits.filter((item) => item.count > 0).length} />
      <HabitContainer
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handleReset}
      />
    </>
  );
};

export default App;
