import React from "react";
import Counter from "./components/Counter";
import FormInput from "./components/Input";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>
        SDC 445 3.3 Performance Assessment - Now added to GitHub using git.
      </h1>
      <hr />
      <Counter />
      <hr />
      <FormInput />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
