import React from "react";
import { useRecoilState} from "recoil";
import { searchTodoListFilterState } from "../store";

const SearchTodo = () => {
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