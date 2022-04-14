import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TestRenderer from "react-test-renderer";

import App from "../app";
import { HabitPresenter } from "../service/habit_presenter";

describe("App", () => {
  let app: React.ReactElement;
  let presenter: HabitPresenter;
  beforeEach(() => {
    presenter = new HabitPresenter(
      [
        { id: "1", name: "Reading", count: 0 },
        { id: "2", name: "Eating", count: 0 },
        { id: "3", name: "studying", count: 1 },
      ],
      5
    );
    app = <App presenter={presenter} />;
  });
  it("render", () => {
    const component = TestRenderer.create(app);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe("App Component", () => {
    it("counts only active habits", () => {
      render(app);
      const button: HTMLElement = screen.getAllByTitle("increment")[0];
      userEvent.click(button);
      const count = screen.getByTitle("total-count");
      expect(count.innerHTML).toBe("2");
    });
    it("add new habit", () => {
      render(app);
      const newHabit = "New Habit";
      const input: HTMLElement = screen.getByPlaceholderText("please enter your habit");
      const button: HTMLElement = screen.getByText("Add");
      userEvent.type(input, newHabit);
      userEvent.click(button);
      const addedName = screen.getAllByTitle("habit-name")[0];
      expect(addedName.innerHTML).toBe("Reading");
      const addedCount = screen.getAllByTitle("habit-count")[0];
      expect(addedCount.innerHTML).toBe("0");
    });
    it("delete an item", () => {
      render(app);
      const firstHabitButton: HTMLElement = screen.getAllByTitle("delete")[0];
      userEvent.click(firstHabitButton);
      const nextHabitName = screen.getAllByTitle("habit-name")[0];
      expect(nextHabitName.innerHTML).not.toBe("Reading");
    });
    it("increase the counter", () => {
      render(app);
      const button: HTMLElement = screen.getAllByTitle("increment")[0];
      userEvent.click(button);
      const count = screen.getAllByTitle("habit-count")[0];
      expect(count.innerHTML).toBe("1");
    });
    it("decrease the counter", () => {
      render(app);
      const button: HTMLElement = screen.getAllByTitle("decrement")[2];
      userEvent.click(button);
      const count = screen.getAllByTitle("habit-count")[2];
      expect(count.innerHTML).toBe("0");
    });
    it("resets all counters", () => {
      render(app);
      const button: HTMLElement = screen.getByText("ResetAll");
      userEvent.click(button);
      screen.getAllByTitle("habit-count").forEach((count) => {
        expect(count.innerHTML).toBe("0");
      });
    });
  });
});
