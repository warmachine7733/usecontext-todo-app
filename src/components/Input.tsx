import React from "react";
import { TodoContext } from "../App";
import { useContext } from "react";

export default function Input() {
  const values = useContext(TodoContext);
  return (
    <div>
      <input
        type="text"
        placeholder="enter a todo"
        onChange={(e) => values.inputHandler(e)}
        value={values.inputVal}
      />
    </div>
  );
}
