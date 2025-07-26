import {type Todo } from "../types/todo";
import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "./actions";

const initialState: Todo[] = [];

let nextId = 1;

export const todoReducer = (state = initialState, action: any): Todo[] => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: nextId++, text: action.payload.text, completed: false },
      ];
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
