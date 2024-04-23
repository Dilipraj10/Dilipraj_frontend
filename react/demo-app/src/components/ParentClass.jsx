import React, { useState } from 'react'
import ChildClass from './ChildClass'

// const ParentClass = (props) => {
//   return (
//     <div>
//       <ChildClass{...props}/>
//     </div>
//   )
// }
export const DataContext = React.createContext();  //used to create context that will retun the context

const ParentClass = () => {
  const [data,setData] =useState(0)
  return (
    <DataContext.Provider value={[data,setData]}> 
      <ChildClass/>
    </DataContext.Provider>
  )
}

export default ParentClass