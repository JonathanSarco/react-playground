import React from "react";
import { ACTIONS } from "../MainUseReducer";

export default function Todo({ todo, dispatch }) {
  return (
    <div style={{ color: todo.complete ? "green" : "red" }}>
      <p>{todo.name}</p>

      <button
        onClick={() => {
          console.log("here", todo.complete);
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } });
        }}
      >
        Toggle
      </button>
      <button>Delete</button>
    </div>
  );
}
