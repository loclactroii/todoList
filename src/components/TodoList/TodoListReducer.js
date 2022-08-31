const initValue = [
  { id: 1, name: "Learn Redux", priority: "high", completed: false },
  { id: 2, name: "Learn React", priority: "medium", completed: true },
  { id: 3, name: "Learn JavaScript", priority: "high", completed: true },
];

const todoReducer = (state = initValue, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );

    default:
      return state;
  }
};

export default todoReducer;
