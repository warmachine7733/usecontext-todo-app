import { TodoContext } from "../App";
import { useContext } from "react";

function Button() {
  const values = useContext(TodoContext);
  return (
    <div>
      <button disabled={!values.inputVal} onClick={() => values.addTodos()}>
        Add
      </button>
    </div>
  );
}

export default Button;
