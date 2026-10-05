import React, { useEffect, useState } from 'react'

const UserComponent = () => {
    const [name,setName]=useState("My name");
    const [email,setEmail]=useState("My email");
    

    const handleChange=(e)=>{
        const {name,value}=e.target;
        if(name=="name"){
            setName(value);
        }else if(name==="email"){
            setEmail(value);
        }

    }
    const handleSubmit=()=>{
        let userData={
            name,email
        };
        console.log("This is input data",userData);
    }

  useEffect(()=>{
    console.log("Hi User Component");
   },[email]);
  return (
   <div>
     <h2>User Page</h2>
     <div>
        {/* <input type='text' placeholder='Enter your name' onChange={(e)=>setName(e.target.value)}/>
        <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)}/> */}

         <input type='text' name='name' placeholder='Enter your name' onChange={handleChange}/>
        <input type="email" name='email' placeholder='Enter your email' onChange={handleChange}/>
        <button onClick={handleSubmit}>Submit</button>
     </div>
     <div>
        <h3>{name}</h3>
        <h3>{email}</h3>
     </div>
   </div>
  )
}

export default UserComponent