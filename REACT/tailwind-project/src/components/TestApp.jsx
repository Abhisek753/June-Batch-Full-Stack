import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className='text-3xl font-bold'>Tailwind CSS</h1>
       {/* <p>Abhisek kumar</p> */}
       {/* <div className='bg-blue-200 gap-20 flex mt-4'>
        <div className='bg-amber-400 w-full text-4xl underline  lowercase h-24'>
            <p>Orange color</p>
        </div>
        <div className='bg-green-400 w-64 h-24'>
          <p>Green Color</p>

        </div>
       </div> */}

       <div className='container bg-amber-200 h-128 w-116'>
        <div  className='h-[50%] bg-red-200 flex'>
          <div className='w-[50%]'>
            <img className='object-cover h-full ' src='https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-user-profile-avatar-png-image_10211467.png'/>

          </div>
          <div  className='flex items-left flex-col pt-16  w-[50%]' >
            <p>Name : Abhisek Kumar</p>
            <p>Email: ak@gmail.com</p>
            <p>No. 9877678909</p>

          </div>

        </div>
        <div className='h-[50%] bg-green-200'>
         <div className='h-[50%]'>
           <p className='text-xl'>Address : Banglore Doddanakundin 2nd cross road</p>
          <p className='text-xl'>My skills : Cooking </p>
         </div>
       <div className='flex items-center justify-center '>
          <div className='w-[50%] flex justify-first items-center'>
               <img className='object-cover w-[40%] ' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5EylI-VT_p2ZE3t4I3DdO4h5rHD2q7xASl1yVDEOskA&s=10'/>
          </div>
         <div  className='flex  items-center ' >
            <p className='text-red-400 italic'>Please Pay Me For Coffee</p>
          

          </div>

        </div>
        </div>
       

       </div>
    </>
  )
}

export default App
