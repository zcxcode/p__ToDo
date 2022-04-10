import { createStore } from "redux";
import { reducer } from "./taskReducer";

export const store = createStore(reducer);
