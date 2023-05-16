import React from 'react';
import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';
export default function App()   
{
    const [todos, setTodos] = useState(null)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => { 
            setTodos(response.data)
        } )
    }, [])
    return <div>{todos ? <div>todos</div>: <Loading/>}</div>
}