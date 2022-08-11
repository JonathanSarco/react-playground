import { useReducer, useState } from "react";
import Todo from "./reducer/Todo";

export const ACTIONS = {
  CREATE_TODO: "create_todo",
  TOGGLE_TODO: "toggle_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.CREATE_TODO:
      return [...todos, createNewTodo(action.payload.name)];

    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    default:
      return todos;
  }
}

function createNewTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

function MainUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.CREATE_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>

      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}

export default MainUseReducer;
