import React from "react";
import { HabitElement } from "../../service/habit_presenter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type HabitProps = {
  habit: HabitElement;
  onIncrement: (habit: HabitElement) => void;
  onDecrement: (habit: HabitElement) => void;
  onDelete: (habit: HabitElement) => void;
};

const Habit = ({ habit, onIncrement, onDecrement, onDelete }: HabitProps) => {
  const { name, count } = habit;
  const handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onIncrement(habit);
  };
  const handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDecrement(habit);
  };
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onDelete(habit);
  };

  return (
    <li className="habit">
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-button habit-increase" title="increment" onClick={handleIncrement}>
        <FontAwesomeIcon icon={faPlusSquare} />
      </button>
      <button className="habit-button habit-decrease" title="decrement" onClick={handleDecrement}>
        <FontAwesomeIcon icon={faMinusSquare} />
      </button>
      <button className="habit-button habit-delete" title="delete" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};
export default React.memo(Habit);
