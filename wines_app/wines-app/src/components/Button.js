import React from "react";

export default function Button() {
  const wrapper_style = {
    textAlign: "center",
  };

  const btn_style = {
    border: "1px solid bgeen",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
  };
  return (
    <div style={wrapper_style}>
      <button style={btn_style}>Add</button>
    </div>
  );
}
