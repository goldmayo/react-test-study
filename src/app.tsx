import React, { Component } from "react";
import "./app.css";
import HabitContainer from "./components/habitContainer";
import Header from "./components/header";
export type HabitElement = { id: number; name: string; count: number };

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Walking", count: 0 },
      { id: 3, name: "Coding", count: 0 },
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
  handleAdd = (name: string) => {
    const newHabits = [...this.state.habits, { id: Date.now(), name: name, count: 0 }];
    this.setState({ habits: newHabits });
  };
  handleReset = () => {
    const newHabits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits: newHabits });
  };

  render(): React.ReactNode {
    return (
      <>
        <Header totalCount={this.state.habits.filter((item) => item.count > 0).length} />
        <HabitContainer
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
