import React from "react";
import { HabitElement } from "../../app/service/habit_presenter";
import Habit from "../habit/habit";
import HabitAddForm from "../habit_add_form/habitAddForm";

type HabitContainerProps = {
  habits: HabitElement[];
  onIncrement: (habit: HabitElement) => void;
  onDecrement: (habit: HabitElement) => void;
  onDelete: (habit: HabitElement) => void;
  onAdd: (name: string) => void;
  onReset: () => void;
};

const HabitContainer = ({ habits, onIncrement, onDecrement, onDelete, onAdd, onReset }: HabitContainerProps) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit: HabitElement) => (
          <Habit key={habit.id} habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />
        ))}
      </ul>
      <button className="habit-reset" onClick={onReset}>
        ResetAll
      </button>
    </>
  );
};
export default HabitContainer;
