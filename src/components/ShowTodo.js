import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeTodo } from "../action/todo";

function ShowTodo() {
  const dispatch = useDispatch();
  const todoState = useSelector((state) => state.mytodos);

  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <div>
      {todoState.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}

          <span className="float-end">
            <button
              className="btn btn-danger"
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              DELETE
            </button>
          </span>
        </li>
      ))}
    </div>
  );
}

export default ShowTodo;
