import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-outline-danger" onClick={() => {onDelete(todo)}}>Delete</button>
      <hr/>
    </>
  );
}
