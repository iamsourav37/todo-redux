import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import React from "react";
import "./App.css";

import TodoForm from "./components/TodoForm";
import ShowTodo from "./components/ShowTodo";

// redux
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="container text-center mt-2 pb-4  bg-dark">
        <h1 className="display-5 p-1 text-warning">TODO PROJECT IN REDUX</h1>
        <TodoForm />
      </div>

      <div className="bg-light p-3 mt-3">
        <h4 className="display-3">Your todos</h4>
        <ShowTodo />
      </div>
    </Provider>
  );
}

export default App;
