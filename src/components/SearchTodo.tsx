import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../store";

const SearchTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useRecoilState(todosState)

  return (
    <>
      <div className="form-group" style={{ marginTop: 46}}>
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Search title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={(_) => {
            setTodos(todos.filter(todo => todo.title === title))
          }}
        >
          Search Todo
        </button>
      </div>
    </>
  );
};

export default SearchTodo;