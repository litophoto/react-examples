import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Todo } from "../models/todos";

type AddNewTodoType = {
  create: (newTodo: Todo) => void;
};

const AddNewTodo = ({ create }: AddNewTodoType) => {
  const [newTodo, setNewTodo] = useState<Todo>({ title: "", completed: false });
  const handleChangeTodoTitle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTodo({
      title: event.target.value,
      completed: false,
    });
  };
  const [typing, setTyping] = useState(false);
  const handleCreateNewTodo = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || typing) return;
    newTodo && create(newTodo);
    setNewTodo({ title: "", completed: false });
  };
  return (
    <TextField
      value={newTodo.title}
      onChange={(e) => handleChangeTodoTitle(e)}
      onKeyDown={handleCreateNewTodo}
      onCompositionStart={() => setTyping(true)}
      onCompositionEnd={() => setTyping(false)}
      autoFocus
      fullWidth
      size="small"
    />
  );
};

export default AddNewTodo;
