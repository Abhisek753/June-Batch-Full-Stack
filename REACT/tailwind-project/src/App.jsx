import React from 'react'
import CardContainer from './components/CardContainer'
import DynamicCardComponent from './components/DynamicCardComponent'

const App = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Tailwind Responsiveness</h1>
      {/* <CardContainer/> */}
      <DynamicCardComponent/>
    </div>
  )
}

export default App