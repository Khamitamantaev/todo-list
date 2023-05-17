
import React from "react";
import Todo from "./Todo";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../store";

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);
  
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
              <Todo key={todo.id} todo={todo}/>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TodoList;