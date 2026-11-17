import React from 'react'
import Child from './Child'
import User from './User';

const Parent = () => {
    let parentData = "fruits data"
    let num=50;
  return (
    <div style={{border: '1px solid black', padding: '10px', margin: '10px'}}>
        <h3>Parent Component</h3>
        <Child data={parentData} count={num}/>
        <User name="Krishna" email="krishna@gmail.com" age={20} />
        
    </div>
  )
}

export default Parent