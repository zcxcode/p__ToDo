import { createStore } from "redux";

export const defaultState = {
  tasks: []
};

export const reducer = (store = defaultState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { ...store, tasks: [...store.tasks, action.content] };
    case "CHECK_TASK":
      return store.tasks;
    case "REMOVE_TASK":
      return store.tasks.filter((i) => i.id !== action.content)
    default:
      return store;
  }
};

export const store = createStore(reducer);
