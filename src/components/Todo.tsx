import React, { FunctionComponent } from 'react'

type Props = {
    todo: {
        id: number,
        title: string,
        userId: number,
        completed: boolean
    },
    toggleTodo: Function,
    removeTodo: Function
}

const Todo: FunctionComponent<Props> = ({ todo, toggleTodo, removeTodo }) => {

    return (
        <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.completed ? "✅" : ""}</td>
            <td>
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