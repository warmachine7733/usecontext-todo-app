import { createContext, useMemo, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import View from "./components/View";

export const TodoContext = createContext({} as any);

function App() {
  const [inputVal, setInput] = useState("" as String);
  const [todoList, setTodos] = useState([] as any);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const addTodos = () => {
    console.log("input", inputVal);
    setTodos((prev: []) => [inputVal, ...prev]);
    setInput("");
  };

  const newOps = {
    inputHandler,
    addTodos,
    todoList,
    inputVal,
  };
  return (
    <div className="wrapper">
      <TodoContext.Provider value={newOps}>
        <div className="App">
          <View />
          <div className="actions">
            <Input />
            <Button />
          </div>
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
