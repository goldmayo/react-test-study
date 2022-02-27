import React, { Component } from "react";
import Habit from "./habit";

export type HabitElement = { id: number; name: string; count: number };

export default class HabitContainer extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Walking", count: 2 },
      { id: 3, name: "Coding", count: 5 },
    ],
  };

  handleIncrement = (habit: HabitElement) => {
    const newHabits = [...this.state.habits];
    const index = newHabits.indexOf(habit);
    newHabits[index].count++;
    this.setState({ habits: newHabits });
  };

  handleDecrement = (habit: HabitElement) => {
    const newHabits = [...this.state.habits];
    const index = newHabits.indexOf(habit);
    const count = newHabits[index].count - 1;
    newHabits[index].count = count < 0 ? 0 : count;
    this.setState({ habits: newHabits });
  };

  handleDelete = (habit: HabitElement) => {
    const newHabits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits: newHabits });
  };

  render() {
    return (
      <ul>
        {this.state.habits.map((habit: HabitElement) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        ))}
      </ul>
    );
  }
}
