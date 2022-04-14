import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HabitAddForm from "../habitAddForm";
import TestRenderer from "react-test-renderer";

describe("HabitAddForm", () => {
  it("render", () => {
    const component = TestRenderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
  describe("Form Submit", () => {
    let onAdd: (name: string) => void;
    beforeEach(() => {
      onAdd = jest.fn();
    });
    it("calls onAdd when button is clicked and valid habit is entered", () => {
      render(<HabitAddForm onAdd={onAdd} />);
      const input: HTMLElement = screen.getByPlaceholderText("please enter your habit");
      const button: HTMLElement = screen.getByText("Add");
      //사용자가 input에 원하는 습관의 이름을 입력하고
      userEvent.type(input, "New Habit");
      //add 버튼을 클릭하면
      userEvent.click(button);
      //onAdd가 input에 입력된 이름과 함께 호출되어야 한다
      expect(onAdd).toHaveBeenCalledWith("New Habit");
    });
    it("does not call onAdd when the habit is empty", () => {
      render(<HabitAddForm onAdd={onAdd} />);
      const input: HTMLElement = screen.getByPlaceholderText("please enter your habit");
      const button: HTMLElement = screen.getByText("Add");
      userEvent.click(input);
      userEvent.click(button);
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
