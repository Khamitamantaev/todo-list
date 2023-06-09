import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import TodoListFilters from "../components/TodoListFilter";
import SearchTodo from "../components/SearchTodo";
import SortTodo from "../components/Sort";
export const Root = () => (
    <div className="container">
        <h1>Todos</h1>
        <div className="row">
            <div className="col">
                <TodoListFilters />
            </div>
            <div className="col">
                <SearchTodo />
            </div>
            <div className="col">
                <AddTodo />
            </div>
            <div className="col">
                <SortTodo />
            </div>
        </div>
        <TodoList />
    </div>
);