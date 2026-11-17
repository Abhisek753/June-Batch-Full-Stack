import { useState } from 'react'
import './App.css'
import Parent from './components/Parent'
import Counter from './components/Counter'

function App() {
 

  return (
    <>
     <h2>Props Drilling</h2>
     {/* <Parent/> */}
     <Counter/>
    </>
  )
}

export default App
