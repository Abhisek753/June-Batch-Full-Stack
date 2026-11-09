import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <main className='min-h-screen'>
           <Outlet/>
        </main>
        <Footer/>

      
    </div>
  )
}

export default Layout