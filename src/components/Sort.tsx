import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { todosState } from "../store";

const SortTodo = () => {
    const [todos, setTodos] = useRecoilState(todosState)

    return (
        <>
            <div className="form-group">
                <button
                    className="btn btn-primary"
                    onClick={(_) => {
                        const arrCopy = [...todos];
                        setTodos(arrCopy.sort((a, b) => {
                            const nameA = a.title.toUpperCase();
                            const nameB = b.title.toUpperCase();
                            if (nameA < nameB) {
                                return -1;
                            }
                            if (nameA > nameB) {
                                return 1;
                            }
                            return 0;
                        }))
                    }}
                >
                    Sort Todo By Title
                </button>
                <button
                    className="btn btn-primary"
                    onClick={(_) => {
                        const arrCopy = [...todos];
                        setTodos(arrCopy.sort((a, b) => a.id - b.id))
                    }}
                >
                    Sort Todo By ID
                </button>
            </div>
        </>
    );
};

export default SortTodo;