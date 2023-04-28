import React, { useState } from "react";
import { Typography } from "@mui/material";
import { ListItem, Checkbox, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Todo } from "../models/todos";

type TodoItemProps = {
  todo: Todo;
  change: (oldValue: Todo, newValue: Todo) => void;
  delete: (oldValue: Todo) => void;
};

const TodoItem = (props: TodoItemProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo: Todo = {
      title: props.todo.title,
      completed: event.target.checked,
    };
    props.change(props.todo, newTodo);
  };

  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(props.todo.title);

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTitle(event.target.value);
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };
  const handleDoneEdit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || event.nativeEvent.isComposing) return;
    const newTodo: Todo = {
      title: newTitle,
      completed: props.todo.completed,
    };
    newTodo && props.change(props.todo, newTodo);
    setIsEditing(false);
  };

  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            color="warning"
            onClick={() => props.delete(props.todo)}
          >
            <Delete />
          </IconButton>
        }
      >
        <Checkbox
          checked={props.todo.completed}
          onChange={(e) => handleChange(e)}
        />
        {isEditing ? (
          <TextField
            value={newTitle}
            onChange={handleChangeTitle}
            onKeyDown={handleDoneEdit}
            size="small"
            variant="standard"
            fullWidth
          />
        ) : (
          <Typography sx={{ width: "100%" }} onDoubleClick={handleStartEdit}>
            {props.todo.title}
          </Typography>
        )}
      </ListItem>
    </>
  );
};

export default TodoItem;
