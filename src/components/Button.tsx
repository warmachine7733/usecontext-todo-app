import { TodoContext } from "../App";

function Button() {
  return (
    <div>
      <TodoContext.Consumer>
        {(values) => {
          return (
            <button
              disabled={!values.inputVal}
              onClick={() => values.addTodos()}
            >
              Add
            </button>
          );
        }}
      </TodoContext.Consumer>
    </div>
  );
}

export default Button;
