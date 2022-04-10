import React from "react";
import { v4 as uuidv4 } from "uuid";

export interface HabitPresenterInterface {
  getHabits(): HabitElement[];
  increment(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  handleDecrement(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  handleDelete(habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  handleAdd(name: string, update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
  handleReset(update: React.Dispatch<React.SetStateAction<HabitElement[]>>): void;
}

export type HabitElement = { id: string; name: string; count: number };

// Singleton
export class HabitPresenter implements HabitPresenterInterface {
  private static instance: HabitPresenter;

  private habits: HabitElement[];

  private constructor(habits: HabitElement[]) {
    this.habits = habits;
  }

  public static getInstance(habits: HabitElement[]): HabitPresenter {
    if (!HabitPresenter.instance) {
      HabitPresenter.instance = new HabitPresenter(habits);
    }
    return HabitPresenter.instance;
  }

  getHabits = () => {
    return this.habits;
  };

  increment = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    update(this.habits);
  };

  handleDecrement = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      return item;
    });
    update(this.habits);
  };

  handleDelete = (habit: HabitElement, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.filter((item) => item.id !== habit.id);
    update(this.habits);
  };

  handleAdd = (name: string, update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = [...this.habits, { id: uuidv4(), name: name, count: 0 }];
    update(this.habits);
  };

  handleReset = (update: React.Dispatch<React.SetStateAction<HabitElement[]>>) => {
    this.habits = this.habits.map((habit) => {
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    update(this.habits);
  };
}
