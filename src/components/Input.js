import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>User Input</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="User typing......"
      />
      <p style={{ marginTop: "10px" }}>You're typing: {text}</p>
    </div>
  );
};

export default Input;
