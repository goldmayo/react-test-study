import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

import HabitContainer from "../habitContainer";
import { HabitElement } from "../../../service/habit_presenter";

describe("HabitContainer component", () => {
  let habits: HabitElement[];
  let onIncrement: jest.Mock<any, any>;
  let onDecrement: jest.Mock<any, any>;
  let onDelete: jest.Mock<any, any>;
  let onAdd: jest.Mock<any, any>;
  let onReset: jest.Mock<any, any>;
  let habitContainerComponent: React.ReactElement;

  beforeEach(() => {
    habits = [
      { id: "1", name: "studying", count: 1 },
      { id: "2", name: "Eating", count: 2 },
    ];
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    onAdd = jest.fn();
    onReset = jest.fn();
    habitContainerComponent = (
      <HabitContainer
        habits={habits}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
        onAdd={onAdd}
        onReset={onReset}
      />
    );
  });
  it("Render", () => {
    const component = TestRenderer.create(habitContainerComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button handler", () => {
    it("calls onAdd when clicking the 'Add' button", () => {
      render(habitContainerComponent);
      const input: HTMLInputElement = screen.getByPlaceholderText("please enter your habit");
      const button: HTMLElement = screen.getByText("Add");
      const newHabit = "New Habit";
      userEvent.type(input, newHabit);
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledWith(newHabit);
    });
    it("calls onIncrement when clicking the 'Increment' button", () => {
      render(habitContainerComponent);
      const button: HTMLElement = screen.getAllByTitle("increment")[0];
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habits[0]);
    });
    it("calls onDecrement when clicking the 'Decrement' button", () => {
      render(habitContainerComponent);
      const button: HTMLElement = screen.getAllByTitle("decrement")[0];
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habits[0]);
    });
    it("calls onDelete when clicking the 'Delete' button", () => {
      render(habitContainerComponent);
      const button: HTMLElement = screen.getAllByTitle("delete")[0];
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habits[0]);
    });
    it("calls onReset when clicking the 'Reset' button", () => {
      render(habitContainerComponent);
      const button: HTMLElement = screen.getByText("ResetAll");
      userEvent.click(button);
      expect(onReset).toHaveBeenCalledTimes(1);
    });
  });
});
