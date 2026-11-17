import React, { useState } from 'react'

const Counter = () => {
  const [count,setCount]=useState(0);
  const [show,setShow]=useState(true);
//   const Add=()=>{
//   setCount(pre=>pre+1);
//     setCount(data=>data+1);
//    setCount(pre=>pre+1);
//     console.log(count)
//   }
  return (
    <div style={{border:"2px solid black"}}>
        <div style={{margin:"auto",backgroundColor:"gray",textAlign:"center",height:"150px",width:"300px"}}>
            <h1>Count:{count}</h1>
             <div style={{display:"flex",justifyContent:"space-around",marginTop:"20px"}}>
                <button onClick={()=>setCount(count+1)} style={{padding:"4px 6px",backgroundColor:"green",color:"white"}}>Increase</button>
                <button onClick={()=>setCount(count-1)} style={{padding:"4px 6px",backgroundColor:"yellow",color:"black"}}>Decrease</button>
                <button onClick={()=>setCount(0)}  style={{padding:"4px 6px",backgroundColor:"red",color:"white"}}>Reset</button>
                {/* <button onClick={Add}  style={{padding:"4px 6px",backgroundColor:"blue",color:"white"}}>Add</button> */}

             </div>
        </div>
        <div >
            {show && <div style={{backgroundColor:"blue",height:"80px",width:"80px"}}></div>}
            <button onClick={()=>setShow(!show)}>{show?"Hide":"Show"}</button>
        </div>
            
        
    </div>
  )
}

export default Counter



// import React, { useState } from 'react'

// const Counter = () => {
//   const [count,setCount]=useState(10);
//   const [data,setData]=useState("Arun kumar")
//     function increase(){
//       setCount(count+1)
//     }
//    console.log(count)
//   return (
//     <div>
//         <h2>{count}</h2>
//         <button onClick={increase}>Increase</button>
//         <p>{data}</p>
//     </div>
//   )
// }

// export default Counter















// // import React from 'react'

// // const Counter = () => {
// //     let count=1;
// //     function increase(){
// //         count++;
// //         console.log(count);
// //     }
// //      console.log(count,"count2 log");
// //   return (
// //     <div>
// //         <h2>{count}</h2>
// //         <button onClick={increase}>Increase</button>
// //     </div>
// //   )
// // }

// // export default Counter