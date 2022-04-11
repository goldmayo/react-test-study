// export {};
import { HabitPresenter } from "../service/habit_presenter";

describe("Habit Presenter", () => {
  const habits = [
    { id: "1", name: "Reading", count: 1 },
    { id: "2", name: "Running", count: 0 },
  ];
  let presenter: HabitPresenter;
  let update = jest.fn();

  beforeEach(() => {
    presenter = new HabitPresenter(habits);
  });

  describe("getHabits", () => {
    it("initialize with habits array", () => {
      expect(presenter.getHabits()).toEqual(habits);
    });
  });

  describe("increment", () => {
    it("increments habit count", () => {
      presenter.increment(habits[0], update);
      expect(presenter.getHabits()[0].count).toBe(2);
      checkUpdateIsCalled();
    });
  });

  describe("decrement", () => {
    it("decrements habit count", () => {
      presenter.decrement(habits[0], update);
      expect(presenter.getHabits()[0].count).toBe(0);
      checkUpdateIsCalled();
    });

    it("decrements does not set the count value uder 0", () => {
      presenter.decrement(habits[0], update);
      presenter.decrement(habits[0], update);
      expect(presenter.getHabits()[0].count).toBe(0);
    });
  });
  describe("delete", () => {
    it("deletes habit from the list", () => {
      presenter.delete(habits[0], update);
      expect(presenter.getHabits().length).toBe(1);
      expect(presenter.getHabits()[0].name).toBe("Running");
      checkUpdateIsCalled();
    });
  });

  describe("add", () => {
    it("adds new habit to the list", () => {
      presenter.add("Eating", update);
      expect(presenter.getHabits().length).toBe(3);
      expect(presenter.getHabits()[2].name).toBe("Eating");
      checkUpdateIsCalled();
    });
  });
  describe("reset", () => {
    it("resets all habit counts to 0", () => {
      presenter.reset(update);
      expect(presenter.getHabits()[0].count).toBe(0);
      expect(presenter.getHabits()[1].count).toBe(0);
      checkUpdateIsCalled();
    });
  });
  const checkUpdateIsCalled = () => {
    expect(update).toHaveBeenCalledTimes(1);
    // update함수의 parameter로 presenter의 habits이 전달되었는지 확인.
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  };
});
