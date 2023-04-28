import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import { List, ListItem, Checkbox } from "@mui/material";
import { Todo, Visibility } from "../models/todos";
import TodoItem from "../components/TodoItem";
import AddNewTodo from "../components/AddNewTodo";
import useTodos from "../hooks/useTodos";

const todosFilter = (todos: Todo[]) => {
  return {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  };
};

const Todos = () => {
  const [todos, actions] = useTodos();

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
          <AddNewTodo create={actions.create} />
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
