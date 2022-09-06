import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../components/Filters/filterReducer";
import todoReducer from "../components/TodoList/todoListReducer";

const store = configureStore({
  reducer: {
    filters: filterReducer.reducer,
    todoList: todoReducer.reducer,
  },
});

export default store;
