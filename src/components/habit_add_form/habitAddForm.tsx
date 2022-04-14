import React, { memo } from "react";

type HabitAddFormProps = {
  onAdd: (name: string) => void;
};

const HabitAddForm = memo((props: HabitAddFormProps) => {
  const formRef = React.createRef<HTMLFormElement>();
  const inputRef = React.createRef<HTMLInputElement>();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current && inputRef.current) {
      if (inputRef.current.value) {
        props.onAdd(inputRef.current.value);
      }
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
export default HabitAddForm;
