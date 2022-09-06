import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn Redux", priority: "high", completed: false },
    { id: 2, name: "Learn React", priority: "medium", completed: true },
    { id: 3, name: "Learn JavaScript", priority: "high", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },

    toggleTodoStatus: (state, action) => {
      const todoRemaining = state.find(todo => todo.id === action.payload)
      if(todoRemaining) {
        todoRemaining.completed = !todoRemaining.completed
      }
    }
  }
});
