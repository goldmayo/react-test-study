import TestRenderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import Habit from "../habit";
import { HabitElement } from "../../../app/service/habit_presenter";
import userEvent from "@testing-library/user-event";

describe("Habit component", () => {
  const habit: HabitElement = { id: "1", name: "studying", count: 0 };
  let onIncrement: jest.Mock<any, any>;
  let onDecrement: jest.Mock<any, any>;
  let onDelete: jest.Mock<any, any>;
  let habitComponent: React.ReactElement;

  beforeEach(() => {
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    habitComponent = <Habit habit={habit} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete} />;
  });

  it("Render", () => {
    const component = TestRenderer.create(habitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Button handler", () => {
    it("calls handleIncrement when user click increment button", () => {
      render(habitComponent);
      const button = screen.getByTitle("increment");
      userEvent.click(button);
      expect(onIncrement).toHaveBeenCalledWith(habit);
    });
    it("calls handleDecrement when user click decreasement button", () => {
      render(habitComponent);
      const button = screen.getByTitle("decrement");
      userEvent.click(button);
      expect(onDecrement).toHaveBeenCalledWith(habit);
    });
    it("calls handleDelete when user click delete button", () => {
      render(habitComponent);
      const button = screen.getByTitle("delete");
      userEvent.click(button);
      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
