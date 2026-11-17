import React from 'react'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error : {error}</h3>

  return (
    <div>
        <h2>Home - Users</h2>
        {data.map((user)=>(
            <div key={user.id}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default Home
