import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { List, ListItem, Checkbox, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { Todo, Visibility } from "../models/todos";
import todosAPI from "../api/todos";

// const url = "http://127.0.0.1:8000/todos/";

const todosFilter = (todos: Todo[]) => {
  return {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  };
};

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
  const [newTitle, setNewTitle] = useState("");
  useEffect(() => {
    setNewTitle(props.todo.title);
  }, []);

  const handleChangeTitle = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewTitle(event.target.value);
  };
  const handleChangeTodo = () => {};
  const [typing, setTyping] = useState(false);
  const handleStartEdit = () => {
    setIsEditing(true)
  }
  const handleDoneEdit = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || typing) return;
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
            onCompositionStart={() => setTyping(true)}
            onCompositionEnd={() => setTyping(false)}
            size="small"
            variant="standard"
            fullWidth
          />
        ) : (
          <Typography
            sx={{ width: "100%" }}
            onDoubleClick={handleStartEdit}
          >
            {props.todo.title}
          </Typography>
        )}
      </ListItem>
    </>
  );
};

const Todos = () => {
  const [todos, actions] = todosAPI();

  const [visibility, setVisibility] = useState<Visibility>("all");
  const handleVisibility = (
    event: React.BaseSyntheticEvent,
    newValue: Visibility
  ) => {
    setVisibility(newValue);
  };
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  useEffect(() => {
    setFilteredTodos(todosFilter(todos)[visibility]);
  }, [todos, visibility]);

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
    newTodo && actions.create(newTodo);
    setNewTodo({ title: "", completed: false });
  };
  return (
    <>
      <header>
        <Typography color="primary" variant="h1" align="center">
          Todos
        </Typography>
      </header>
      <Tabs value={visibility} onChange={handleVisibility} centered>
        <Tab label="ALL" value="all" />
        <Tab label="ACTIVE" value="active" />
        <Tab label="COMPLETED" value="completed" />
      </Tabs>
      <List>
        <ListItem>
          <Checkbox />
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
        </ListItem>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            delete={actions.delete}
            change={actions.update}
          />
        ))}
      </List>
    </>
  );
};

export default Todos;
