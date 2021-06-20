import Todo from "./reducer/todoReducer";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  mytodos: Todo,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
