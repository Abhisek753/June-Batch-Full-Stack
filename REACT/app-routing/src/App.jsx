import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import ProductPage from './pages/ProductPage'
import ProductDetail from './pages/ProductDetail'

function App() {


  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/home' element={<HomePage/>} />
      <Route path='/contact' element={<ContactPage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/products' element={<ProductPage/>} />
      <Route path='/products/:id' element={<ProductDetail/>} />

     </Routes>
    </>
  )
}

export default App
