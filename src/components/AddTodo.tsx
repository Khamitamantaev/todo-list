import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { infoValue, todosState } from "../store";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useRecoilState(todosState);
  const info = useRecoilValue(infoValue);

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{info.total}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          className="btn btn-primary"
          onClick={(_) => {
            setTodos([...todos, { id: todos.length + 1, title, completed: false, userId: 1 }]);
            setTitle("");
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default AddTodo;