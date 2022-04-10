import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { HabitElement } from "../service/habit_presenter";

type HabitProps = {
  habit: HabitElement;
  onIncrement: (habit: HabitElement) => void;
  onDecrement: (habit: HabitElement) => void;
  onDelete: (habit: HabitElement) => void;
};

type HabitState = {
  count: number;
};

export default class Habit extends Component<HabitProps, HabitState> {
  handleIncrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
          <FontAwesomeIcon icon={faPlusSquare} />
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
          <FontAwesomeIcon icon={faMinusSquare} />
        </button>
        <button className="habit-button habit-delete" onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </li>
    );
  }
}
