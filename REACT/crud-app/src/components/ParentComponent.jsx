import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [dataFromChild,setDataFromChild]=useState("");
    const handleChildData=(data,data2)=>{
        console.log("Parent com",data);
         console.log("Parent com",data2);
       setDataFromChild(data);
    }
  return (
    <div>
       <h2>Data from Child: {dataFromChild}</h2>
       <ChildComponent onDataSend={handleChildData}/>
    </div>
  )
}

export default ParentComponent