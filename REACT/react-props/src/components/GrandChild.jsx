import React from 'react'

const GrandChild = ({name}) => {
  return (
    <div style={{border:"2px solid green",backgroundColor:"teal",color:"white",padding:"20px"}}>
        <h2>GrandChild</h2>
        <p>Data from User component name:{name}</p>
    </div>
  )
}

export default GrandChild