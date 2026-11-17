import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",border:"1px solid black",backgroundColor:"skyblue",textAlign:"center",justifyContent:"space-between",padding:"2px 10px",alignItems:"center"}}>
        <div>
            <h2><Link to='./home'>Logo</Link></h2>
        </div>
        <div style={{display:"flex",gap:"10px"}}>
          
            <button style={{padding:"4px 8px",backgroundColor:"orange",border:"none"}}><Link to='/contact'>Contact</Link></button>
            <button style={{padding:"4px 8px",backgroundColor:"orange",border:"none"}}><Link to='/about'>About</Link></button>
            <button style={{padding:"4px 8px",backgroundColor:"orange",border:"none"}}><Link to='/products'>Products</Link></button>

        </div>
    </div>
  )
}

export default Navbar