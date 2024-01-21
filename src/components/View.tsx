import "../css/View.css";
import { TodoContext } from "../App";
import { useContext } from "react";

export default function View() {
  const values = useContext(TodoContext);
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
}
