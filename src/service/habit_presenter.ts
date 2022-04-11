import React from "react";
import { v4 as uuidv4 } from "uuid";

export type HabitElement = { id: string; name: string; count: number };

export interface HabitPresenterInterface {
  getHabits(): HabitElement[];
  increment(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  decrement(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  delete(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  add(name: string, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  reset(update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
}

// Singleton
export class HabitPresenter implements HabitPresenterInterface {
  private habits: HabitElement[];

  constructor(habits: HabitElement[]) {
    this.habits = habits;
  }

  getHabits = () => {
    return this.habits;
  };

  increment = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: item.count + 1 };
      }
      return item;
    });
    update(this.habits);
  };

  decrement = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = item.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  };

  delete = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  };

  add = (name: string, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = [...this.habits, { id: uuidv4(), name: name, count: 0 }];
    update(this.habits);
  };

  reset = (update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    update(this.habits);
  };
}
