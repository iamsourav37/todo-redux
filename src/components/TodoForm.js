import React, { useState } from "react";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "../action/todo";

function TodoForm() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      return alert("Plese enter todo");
    }

    const newTodo = {
      id: nanoid(),
      title: title,
    };
    setTitle("");
    dispatch(addTodo(newTodo));
  };

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control-lg"
            placeholder="write your todo..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-outline-warning">
          ADD
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
