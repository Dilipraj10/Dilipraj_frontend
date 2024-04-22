import React, { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case "ADD":
            // Check if the id already exists in the state
            if (state.some(item => item.id === action.data.id)) {
                return state; // Ignore adding item with same ID
            } else {
                // If id doesn't exist, add the new item
                return [...state, {...action.data, complete: false}];
            }
        case "DEL":
            return state.filter(item => item.id !== action.id);
        case "EDIT":
            return state.map(item => {
                if(item.id === action.id) {
                    return {...item, ...action.data};
                }
                return item;
            });
        default:
            return state;
    }
}

const Todos = () => {
    const [input, setInput] = useState({ id: '', title: '' });
    const [state, dispatch] = useReducer(reducer, []);

    const handleEdit = (id, title) => {
        dispatch({ type: "EDIT", id: id, data: { title: title } });
    };

    return (
        <div>
            <h1>{JSON.stringify(state)}</h1>
            <input type="text" onChange={(e)=> {setInput({...input, id: e.target.value})}} placeholder="Enter ID" />
            <input type="text" onChange={(e)=> {setInput({...input, title: e.target.value})}} placeholder="Enter Title" />
            <button onClick={()=> dispatch({type: "ADD", data: input})}>ADD</button>
            {state.map((item) => (
                <div key={item.id}>
                    <input type="text" value={item.title} onChange={(e) => handleEdit(item.id, e.target.value)} />
                    <button onClick={()=> dispatch({type: "DEL", id: item.id})}>Delete</button>
                    <button onClick={()=> handleEdit(item.id, input.title)}>Edit</button>
                </div>
            ))}
        </div>
    );
}

export default Todos;
