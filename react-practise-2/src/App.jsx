import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  let [todo, setTodo] = useState(["eat"]);
  return (
    <>
      <AddTodo todo={todo} settodo={setTodo} />
      <TodoList todo={todo} />
    </>
  );
}

function AddTodo(props) {
  let [inpValue, setInpValue] = useState("");
  function addTodo() {
    props.settodo([...props.todo, inpValue]);
  }
  return (
    <>
      <input
        type="text"
        placeholder="add todo"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </>
  );
}

function TodoList(props) {
  let todoList = props.todo;
  let todosArr = todoList.map((todo, ind) => <h1 key={ind}>{todo}</h1>);
  return <div>{todosArr}</div>;
}

export default App;
