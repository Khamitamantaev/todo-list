
import React from "react";
import Todo from "./Todo";
import { useRecoilState } from "recoil";
import { todosState } from "../store";

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  const toggleTodo = (id: number) =>
    setTodos(
      todos.map((todo) => {
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
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;
// import React, { FunctionComponent } from 'react'
// import Todo from './Todo'

// type Props = {
//   todos: {
//     id: number,
//     title: string,
//     body: string,
//     userId: number
//   }[]
// }

// const TodoList: FunctionComponent<Props> = ({ todos }) => {
//   return (
//     <ul className="list-group">
//       {todos.map(todo => (
//         <Todo key={todo.id} todo={todo}/>
//       ))}
//     </ul>
//   )
// }

// export default TodoList