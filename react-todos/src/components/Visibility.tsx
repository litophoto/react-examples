import React, { useState, useEffect } from "react";
import { Tabs, Tab } from "@mui/material";
import { Todo, Visibility } from "../models/todos";

type VisibilityType = {
  todos: Todo[];
};

const Visibility = ({ todos }: VisibilityType) => {
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
    <Tabs value={visibility} onChange={handleVisibility} centered>
      <Tab label="ALL" value="all" />
      <Tab label="ACTIVE" value="active" />
      <Tab label="COMPLETED" value="completed" />
    </Tabs>
  );
};

export default Visibility;

const todosFilter = (todos: Todo[]) => {
  return {
    all: todos,
    active: todos.filter((todo) => !todo.completed),
    completed: todos.filter((todo) => todo.completed),
  };
};
