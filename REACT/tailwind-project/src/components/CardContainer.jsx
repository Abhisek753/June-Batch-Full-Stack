import React from 'react'

const CardContainer = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-blue-200 lg:font-bold lg:text-4xl'>Card 1</div>
         <div className='bg-green-200'>Card 2</div>
         <div className='bg-yellow-200'>Card 3</div>
    </div>
  )
}

export default CardContainer