import React, { useState } from 'react'

function Memo() {

    const [count, setCount]= useState(0)
    const [todo, SetTodo] = useState([])
    const increment = () =>{
        setCount(count+1)
    }

    const addTodo = () =>{
        SetTodo((t) => [...todo, "New Todo"])
    }
  return (
    <div>
        <h1>Todo</h1>
        {todo.map((todo)=>
    {
        return 
    })}
    </div>
  )
}

export default Memo