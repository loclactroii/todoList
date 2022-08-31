const initValue = {
  search: "",
  status: "all",
  priorities: [],
};

const filterReducer = (state = initValue, action) => {
  switch (action.type) {
    case "filters/searchTodo":
      return {
        ...state,
        search: action.payload,
      };

    case "filters/filterByStatus":
      return {
        ...state,
        status: action.payload,
      };

    case "filters/filterByPriority":
      console.log(action);
      return {
        ...state,
        priorities: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
