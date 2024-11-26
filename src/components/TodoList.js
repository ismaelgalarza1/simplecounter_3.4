import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTodo} style={{ marginLeft: "10px" }}>
        Add
      </button>
      <ul style={{ marginTop: "20px", listStyleType: "none" }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: "10px 0" }}>
            {todo}{" "}
            <button
              onClick={() => removeTodo(index)}
              style={{ marginLeft: "10px" }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
