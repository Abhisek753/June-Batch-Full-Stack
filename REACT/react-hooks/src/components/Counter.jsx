import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const [postData,setPostData]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>{
            return res.json()
        }).then(data=>{
            console.log(data);
            setPostData(data);
        })
    },[]);
  return (
    <div>
        <h2>Counter app</h2>
        <h3>{count}</h3>
        <button onClick={()=>setCount(pre=>pre+1)}>Increase</button>

        {postData?.map((el,i)=>(
            <div key={i} style={{padding:"10px",margin:"5px 2px",backgroundColor:"pink"}}>
                <h3>{el.id}</h3>
               <h3>Title :- {el.title}</h3> 
               <h4>Body :- {el.body}</h4> 
            </div>
        ))}
    </div>
  )
}

export default Counter