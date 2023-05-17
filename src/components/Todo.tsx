import React, { FunctionComponent } from 'react'
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

    const [todos, setTodos] = useRecoilState(todosState);
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