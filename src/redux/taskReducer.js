const defaultState = {
  tasks: [],
  input: ""
};

export const reducer = (store = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...store, tasks: [...store.tasks, action.content] };
    case "CHECK_TASK":
      return store.tasks;
    case "REMOVE_TASK":
      return {
        ...store,
        tasks: store.tasks.filter((i) => parseInt(i.id) !== parseInt(action.content))
      };
    case "CLEAR_LIST":
      return { ...store, tasks: [] };
    case "USER_INPUT":
      return { ...store, input: action.content };
    case "CHECK_INPUT":
      return store.input;
    default:
      return store;
  }
};
