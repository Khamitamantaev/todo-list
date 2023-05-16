import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
export const Root = () => (
    <div className="container">
      <h1>Todos</h1>
      <AddTodo />
      <TodoList />
    </div>
);