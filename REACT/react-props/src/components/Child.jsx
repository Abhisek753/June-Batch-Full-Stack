import React from 'react'

// const Child = (props) => {
//     console.log("Log in child componet",props.data,props.count)
//   return (
//     <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
//       <h4>Child Component</h4>
//     </div>
//   )
// }

// export default Child

const Child = ({data,count}) => {
    console.log("Log in child componet",data,count)
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <h4>Child Component</h4>
    </div>
  )
}

export default Child