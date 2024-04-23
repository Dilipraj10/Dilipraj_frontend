import React, { useContext } from 'react'
import { DataContext } from './ParentClass'


const GrandChild= () => {
    const [data,setData]= useContext(DataContext)
  return (
    <div>
        <h1>{data}</h1>
        <button onClick={() =>setData(data+1)}>increement</button>
        <button onClick={() =>setData(data-1)}>Decreement</button>
        <button onClick={() =>setData(data+2)}>increement twice</button>
        <button onClick={() =>setData(0)}>Reset</button>
        
    </div>
  )
}

export default GrandChild