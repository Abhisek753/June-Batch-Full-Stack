import React from 'react'

const HomePage = () => {
    let fruits=["Apple","Banana","Mango","Grapes","Kiwi"];
    let count=60;
     console.log("Fruits from homepage",fruits);

     const handleClick=(fruit)=>{
        console.log(fruit,"clicked");
     }
  return (
    <div>
       <h1>Welcome to the Home Page</h1>
       <ol>
        Fruits Data
        {fruits.map((fruit,index)=>(
            <li onClick={()=>handleClick(fruit)} key={index}>{fruit}</li>
        ))}
       </ol>
       <h2>Count {count}</h2>
    </div>
  )
}

export default HomePage