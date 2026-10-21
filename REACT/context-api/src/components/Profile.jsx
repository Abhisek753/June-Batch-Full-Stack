import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const data=useContext(UserContext);
    console.log("data",data);
  return (
    <div>
        <h2>Welcome {"Ari"}</h2>
    </div>
  )
}

export default Profile