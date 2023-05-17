
import React from "react";
import Todo from "./Todo";
import { useRecoilState, useRecoilValue } from "recoil";
import { filteredTodoListState, todoListFilterState, todosState } from "../store";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const todoList = useRecoilValue(filteredTodoListState);

  const toggleTodo = (id: number) =>
    setTodos(todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );

  const removeTodo = (id: number) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <>
      <div className="row">
        <table className="table table-hover">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Completed?</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((todo) => (
              <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;