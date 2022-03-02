import React, { Component } from "react";
import Habit from "./habit";
import { HabitElement } from "../app";
import HabitAddForm from "./habitAddForm";

type HabitContainerProps = {
  habits: HabitElement[];
  onIncrement: (habit: HabitElement) => void;
  onDecrement: (habit: HabitElement) => void;
  onDelete: (habit: HabitElement) => void;
  onAdd: (name: string) => void;
  onReset: () => void;
};

export default class HabitContainer extends Component<HabitContainerProps> {
  render() {
    return (
      <>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit: HabitElement) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          ))}
        </ul>
        <button className="habit-reset" onClick={this.props.onReset}>
          ResetAll
        </button>
      </>
    );
  }
}
