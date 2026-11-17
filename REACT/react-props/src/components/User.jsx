import React from 'react'
import GrandChild from './GrandChild'

const User = (props) => {
    console.log(props)
  return (
    <div style={{border:"2px solid teal",backgroundColor:"#d1d1d1"}}>
        <h2>User component</h2>
         <h3>{props.name}</h3>
         <h3>{props.email}</h3>
         <h3>{props.age}</h3>
         <GrandChild name={props.name}/>
    </div>
  )
}

export default User