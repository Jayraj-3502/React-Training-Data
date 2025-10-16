import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function onHandleSubmit(event) {
    event.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  }

  return (
    <form
      onSubmit={(event) => {
        onHandleSubmit(event);
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />

      <button type="submit"> Submit</button>
    </form>
  );
}
