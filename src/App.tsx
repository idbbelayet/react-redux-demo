import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  updateTodo,
} from "./redux/actions";
import { type Todo } from "./types/todo";
import TodoItem from "./components/TodoItem";
import {  PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos: Todo[] = useSelector((state: any) => state);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-5">Todo App</h1>
      <div className="flex items-center gap-2 mb-4">
      <TextField
        value={input}
        onChange={(_event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setInput(newValue || '')}
        placeholder="Enter todo..."
      />
      <PrimaryButton onClick={handleAdd}>Add</PrimaryButton>
</div>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={(id) => dispatch(toggleTodo(id))}
            onDelete={(id) => dispatch(deleteTodo(id))}
            onUpdate={(id, text) => dispatch(updateTodo(id, text))}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
