import React, { useState } from 'react'

const ChildComponent = ({onDataSend}) => {
    const [inputValue,setInputValue]=useState('');
   const handleClick=()=>{
     onDataSend(inputValue,"hello world");
   }
  return (
    <div>
        <input 
        type='text'
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        placeholder='Type Something'
        />
        <button onClick={handleClick} >Sent to parent</button>
    </div>
  )
}

export default ChildComponent;