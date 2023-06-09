import React from 'react';
import { useEffect } from 'react';
import Loading from './components/Loading';
import axios from 'axios';
import { Root } from './containers/Root';
import { useRecoilState } from 'recoil';
import { todosState } from './store';
export default function App()   
{
    const [todos, setTodos] = useRecoilState(todosState)
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => { 
            setTodos(response.data)
        } )
    }, [])
    return <div>{todos ? <Root/>: <Loading/>}</div>
}