import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState, todosState } from "../store";

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }: any) => {
        // console.log(value)
        setFilter(value);
    };

    return (
        <div style={{ marginTop: 50 }}>
            Filter:
            <select value={filter} onChange={updateFilter} className="form-select" aria-label="Default select example">
                <option value="Show All">All</option>
                <option value="Show Completed">Completed</option>
                <option value="Show Uncompleted">Uncompleted</option>
            </select>
            <p></p>
        </div>
    );
}

export default TodoListFilters;
