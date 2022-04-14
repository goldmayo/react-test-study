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

export class HabitPresenter implements HabitPresenterInterface {
  private habits: HabitElement[];
  private MAX_HABITS: number;

  constructor(habits: HabitElement[], maxHabits: number = 10) {
    this.habits = habits;
    this.MAX_HABITS = maxHabits;
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
    if (this.habits.length === this.MAX_HABITS) {
      throw new Error(`number of habits does not over the ${this.MAX_HABITS}`);
    }
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
