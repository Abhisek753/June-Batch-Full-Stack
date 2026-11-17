import React from 'react'
import useFetch from '../hooks/useFetch'

const About = () => {
    const {data,loading,error}=useFetch("https://jsonplaceholder.typicode.com/posts");

    if(loading) return <h3>Loading...</h3>
    if(error) return <h3>Error : {error}</h3>

  return (
    <div>
        <h2>About - Posts</h2>
        {data.map((post)=>(
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default About
