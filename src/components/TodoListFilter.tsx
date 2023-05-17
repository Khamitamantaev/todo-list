import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../store";

function TodoListFilters() {
    const [filter, setFilter] = useRecoilState(todoListFilterState);

    const updateFilter = ({ target: { value } }: any) => {
        setFilter(value);
    };

    return (
        <div style={{ marginTop: 22 }}>
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
