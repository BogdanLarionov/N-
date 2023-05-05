import React from "react";
// диструкторизированные пропсы { id, firstname, lastname, address, salary }
export default function User({ id, firstname, lastname, address, salary }) {
  const user_style = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "10px",
    width: "200px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div style={user_style}>
      <p>ID:{id}</p>
      <p>First name: {firstname}</p>
      <p>Last name:{lastname}</p>
      <p>Address: {address}</p>
      <p>Salary: {salary}</p>
    </div>
  );
}
