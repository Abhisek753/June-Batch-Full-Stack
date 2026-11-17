import React from 'react'
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
    const navigate=useNavigate()

    const handleSubmit=()=>{
      alert("button clicked");
      navigate("/products");
    }

  return (
    <div>
        <h2>Contact Page</h2>
        <button onClick={handleSubmit}>Navigation button</button>
    </div>
  )
}

export default ContactPage