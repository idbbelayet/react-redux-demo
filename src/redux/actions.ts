
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: { text },  
});

export const updateTodo = (id: number, text: string) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: { id },
});

export const toggleTodo = (id: number) => ({
  type: TOGGLE_TODO,
  payload: { id },
});