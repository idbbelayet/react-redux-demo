import React, { useState } from "react";
import { type Todo } from "../types/todo";
import {type IIconProps } from '@fluentui/react';
import {  PrimaryButton,ActionButton } from '@fluentui/react/lib/Button';
import { TextField } from '@fluentui/react/lib/TextField';
interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onUpdate: (id: number, text: string) => void;
}
const addFriendIcon: IIconProps = { iconName: 'AddFriend' };
const TodoItem: React.FC<Props> = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    onUpdate(todo.id, text);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div  className="flex items-center gap-2 mb-4">
          <TextField value={text} onChange={(_event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => setText(newValue || '')} />
          <PrimaryButton onClick={handleUpdate}>Save</PrimaryButton>
        </div>
      ) : (
        <div className="flex items-center gap-2 mb-4">
          <span
          className="w-md"
            style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            onClick={() => onToggle(todo.id)}
          >
            {todo.text}
          </span>
          <ActionButton iconProps={addFriendIcon} onClick={() => setIsEditing(true)}>Edit</ActionButton>
          <ActionButton onClick={() => onDelete(todo.id)}>Delete</ActionButton>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
