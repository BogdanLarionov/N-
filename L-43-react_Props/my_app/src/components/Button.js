import React from "react";

export default function Button() {
  const btn = {
    border: "1px solid bgeen",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
  };
  return (
    <div>
      <button style={btn}>Button</button>
    </div>
  );
}
