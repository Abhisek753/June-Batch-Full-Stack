import React, { useMemo, useState } from 'react'

const Calculation = () => {
    const [count,setCount]=useState(0);
    const [number,setNumber]=useState(0);

    const double=useMemo(()=>{
        // console.log("calculating...")
        return number *2;
    },[number]);
  

    const calculateSum=(num)=>{
        console.log("calculate")
        let sum=0
      for(let i=1;i<num;i++){
        sum+=i;
      }
      return sum;
    }
    // const value=calculateSum(50000);
   const sum=useMemo(()=>{
    console.log("calculate sum");
       return calculateSum(10000);
   },[number]);

    // console.log(sum)
    // const double=number *2;
    // console.log(double);

  return (
    <div>
        <p>{sum}</p>
        {/* <p>{value}</p> */}
        <h2>Double: {double}</h2>
        <button onClick={()=>setNumber(pre=>pre+1)}>Change number</button>
          <button onClick={()=>setCount(pre=>pre+1)}>Change count</button>
          <p>Count : {count}</p>
    </div>
  )
}

export default Calculation