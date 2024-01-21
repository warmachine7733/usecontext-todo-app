import React from "react";
import "../css/View.css";
import { TodoContext } from "../App";

export default function View() {
  return (
    <TodoContext.Consumer>
      {(values) => {
        return (
          <div className="View">
            <h5>Add activities</h5>
            <ul>
              {values.todoList &&
                values.todoList.map((each: string, i: number) => (
                  <li key={i}>{each}</li>
                ))}
            </ul>
          </div>
        );
      }}
    </TodoContext.Consumer>
  );
}
