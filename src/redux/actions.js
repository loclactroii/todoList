export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const toggleTodoStatus = (todoId) => {
    return {
        type: 'todoList/toggleTodoStatus',
        payload: todoId,
    }
}

export const searchTodo = (searchValue) => {
    return {
        type: 'filters/searchTodo',
        payload: searchValue,
    }
}

export const filterByStatus = (status) => {
    return {
        type: 'filters/filterByStatus',
        payload: status,
    }
}

export const filterByPriority = (priorities) => {
    return {
        type: 'filters/filterByPriority',
        payload: priorities,
    }
}
