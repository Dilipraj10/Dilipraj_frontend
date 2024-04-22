
import React, { useState } from "react"

const Counter=() => {
    const[count,setCount]= useState(0)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count+1)}>Increement 1</button>
            <button onClick={()=> setCount(count+10)}>Increement 10</button>
            <button onClick={()=> setCount(10)}>Reset</button>


        </div>
    )
}

export default Counter