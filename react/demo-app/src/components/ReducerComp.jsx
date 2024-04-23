import React, { useReducer } from 'react'




const intialValue = { count : 0}

const reducer = (state,action) => {
    switch (action.type) {
        case "INCREMENT" : 
            return { count: state.count+1}
        case "DECREMENT" :
            return { count: state.count-1}
        case "RESET" :
            return { count: 0}
        default:
            return state;

    }
}

const ReducerComp = () => {
    const [state, dispatcher] = useReducer(reducer, intialValue)
  return (
    <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatcher({type:"INCREMENT"})}>Increment</button>
        <button onClick={() => dispatcher({type:"DECREMENT"})}>Decrement</button>
        <button onClick={() => dispatcher({type:"DO NOTHING"})}>Do Nothing</button>
        <button onClick={() => dispatcher({type:"RESET"})}>Reset</button>

    </div>
  )
}

export default ReducerComp