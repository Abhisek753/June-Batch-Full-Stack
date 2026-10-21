import React from 'react'

const DynamicCardComponent = () => {

    const products=[{id:1,name:"Laptop",price:"50000"},{id:2,name:"Headphone",price:"3000"},{id:3,name:"Keyboard",price:"1500"},]

  return (
    <div className='min-h-screen sm:p-6  p-4 bg-gray-200'>
        <h1 className='mb-6 text-2xl font-bold md:text-4xl'>Our Product</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {products.map((product)=>(
                <div className='rounded-xl bg-white p-5 shadow-md' key={product.id}>
                    <h2 className='text-xl font-bold'>{product.name}</h2>
                    <p className='my-3 text-gray-600 sm:text-red-200 md:text-red-400 md:text-xl'>{product.price}</p>
                    <button className='w-full rounded-lg bg-blue-600 p-3 text-white hover:bg-blue-800'>Add to cart</button>
                </div>
            ))

            }
        </div>

    </div>
  )
}

export default DynamicCardComponent