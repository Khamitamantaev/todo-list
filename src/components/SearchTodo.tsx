import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { searchTodoListFilterState, searchTodoListState, todosState } from "../store";

const SearchTodo = () => {
  const todoList = useRecoilValue(searchTodoListState)
  const [title, setTitle] = useRecoilState(searchTodoListFilterState)

  return (
    <>
      <div className="form-group" style={{ marginTop: 20}}>
        Search
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Search title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchTodo;