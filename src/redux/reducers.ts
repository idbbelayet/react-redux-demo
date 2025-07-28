import { type TodoState } from "../types/todo";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UPDATE_TODO } from "./actions";

const initialState: TodoState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos") || "[]")
    : [], 
};

let nextId = 1;

export const todoReducer = (state = initialState, action: any): TodoState => { 
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          { id: nextId++, text: action.payload.text, completed: false },
        ],
        
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo
        ),
        
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
        
      };
    default:          
      return state;
   
  }
  
};
