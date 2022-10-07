import { useEffect, useState } from "react";
import { Visibility, Todo } from "../models/todos";

const url = "http://127.0.0.1:8000/todos/";
const headers = {
  "Content-Type": "application/json",
};
const todosAPI = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(url);
      const data = await res.json();
      await setTodos(data);
    })();
    console.log('get todos')
  }, []);

  const actions = {
    create: (newTodo: Todo) => {
      (async () => {
        const res = await fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        await setTodos([data, ...todos]);
      })();
    },
    update: (oldTodo: Todo, newTodo: Todo) => {
      if (!oldTodo.id) return
      (async () => {
        const res = await fetch(`${url}${oldTodo.id}/`, {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(newTodo),
        });
        const data = await res.json();
        const newTodos = todos.map((todo) => {
          if (todo.id === data.id) return data;
          else return todo;
        });
        await setTodos(newTodos);
      })();
    },
    delete: (oldTodo: Todo) => {
      if (!oldTodo.id) return
      (async () => {
        const res = await fetch(`${url}${oldTodo.id}/`, {
          method: "DELETE",
          headers: headers,
        });
        const newTodos = todos.filter((todo) => {
          if (todo.id === oldTodo.id) return false;
          else return true;
        });
        await setTodos(newTodos);
      })();
    },
  };

  return [todos, actions] as const;
};

export default todosAPI;
