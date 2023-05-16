import React from 'react';
import { useState } from 'react';
import Loading from './components/Loading';
export default function App()   
{
    const [todos, setTodos] = useState([])
    return <div><Loading/></div>
}