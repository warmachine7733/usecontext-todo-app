import React from "react";
import { TodoContext } from "../App";

export default function Input() {
  return (
    <div>
      <TodoContext.Consumer>
        {(values) => {
          return (
            <input
              type="text"
              placeholder="enter a todo"
              onChange={(e)=>values.inputHandler(e)}
              value={values.inputVal}
            />
          );
        }}
      </TodoContext.Consumer>
    </div>
  );
}
