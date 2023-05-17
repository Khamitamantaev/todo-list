import React, { FunctionComponent, useState } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../store'

type Props = {
    todo: {
        id: number,
        title: string,
        userId: number,
        completed: boolean
    }
}

const Todo: FunctionComponent<Props> = ({ todo }) => {
    const [edit, setEdit] = useState(false)
    const [todos, setTodos] = useRecoilState(todosState);
    const index = todos.findIndex((todoItem) => todoItem === todo);
    const toggleTodo = (id: number) =>
        setTodos(todos.map((todo) => {
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

    const editTodoTitle = ({ target: { value}}:any) => {
        const newArray = todos.map(obj =>
            obj.id === todo.id ? { ...obj, title: value } : obj
        );
        return setTodos(newArray)
    }

    return (
        <tr key={todo.id}>
            <td>{edit ? <input type="text" value={todo.title} onChange={editTodoTitle} /> : todo.title}</td>
            <td>{todo.completed ? "✅" : ""}</td>
            <td>
                <button className="btn btn-sm btn-info" onClick={(_) => setEdit(!edit)}>
                    Edit
                </button>
                <button
                    className="btn btn-sm btn-info"
                    onClick={(_) => toggleTodo(todo.id!)}
                >
                    Toggle
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={(_) => removeTodo(todo.id!)}
                >
                    Remove
                </button>
            </td>
        </tr>
    )
}

export default Todo