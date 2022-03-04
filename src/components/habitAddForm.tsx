import React, { PureComponent, memo } from "react";

type HabitAddFormProps = {
  onAdd: (name: string) => void;
};

export const HabitAddFormF = memo((props: HabitAddFormProps) => {
  const formRef = React.createRef<HTMLFormElement>();
  const inputRef = React.createRef<HTMLInputElement>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current && inputRef.current) {
      props.onAdd(inputRef.current.value);
      //   inputRef.current.value = "";
      formRef.current.reset(); // 위와 동일하나 이게 정석
    }
  };
  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input ref={inputRef} type="text" className="add-input" placeholder="please enter your habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default class HabitAddForm extends PureComponent<HabitAddFormProps> {
  private formRef = React.createRef<HTMLFormElement>();
  private inputRef = React.createRef<HTMLInputElement>();

  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.formRef.current && this.inputRef.current) {
      this.props.onAdd(this.inputRef.current.value);
      //   this.inputRef.current.value = "";
      this.formRef.current.reset(); // 위와 동일하나 이게 정석
    }
  };
  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input ref={this.inputRef} type="text" className="add-input" placeholder="please enter your habit" />
        <button className="add-button">Add</button>
      </form>
    );
  }
}
