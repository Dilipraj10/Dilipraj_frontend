import React, { useEffect } from 'react'
import GrandChild from './GrandChild'

// const ChildClass = (props) => {
//   return (
//     <div><h1>{JSON.stringify(props)}</h1></div>
//   )
// }

// const ChildClass = () => {
//     return (
//       <div>
//         <GrandChild/>
//       </div>
//     )
//   }


// const ChildClass = () => {
//     useEffect(() => {
//         console.log("use effect 1")
//     })
//     return (
//       <div>
//         {/* <GrandChild/> */}
//         <h1>Hello</h1>
//       </div>
//     )
//   }

const ChildClass = () => {

    
    useEffect(() => {
        console.log("use effect 1")
    })
    return (
      <div>
        {/* <GrandChild/> */}
        <h1>Hello</h1>
      </div>
    )
  }


export default ChildClass