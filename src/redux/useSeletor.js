import { createSelector } from "reselect";

export const useSelectorSearchTodo = (state) => state.filters.search;
export const useSelectorFilterStatus = (state) => state.filters.status;
export const useSelectorFilterPriority = (state) => state.filters.priorities;
export const useSelectorTodoList = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  useSelectorTodoList,
  useSelectorSearchTodo,
  useSelectorFilterStatus,
  useSelectorFilterPriority,
  (todos, searchText, status, priorities) => {
    if (status === "all") {
        console.log(todos);

      return todos.filter((todo) => {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      });
    }

    return todos.filter((todo) => {
      return (
        todo.name.includes(searchText) &&
        (status === "completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
      );
    });
  }
);
