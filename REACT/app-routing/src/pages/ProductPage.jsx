import React from 'react'
import { Link } from 'react-router-dom'

const ProductPage = () => {
  return (
    <div>
        <Link style={{padding: '10px'}} to="/products/1">Product 1</Link>
        <Link style={{padding: '10px'}} to="/products/2">Product 2</Link>
        <Link style={{padding: '10px'}} to="/products/3">Product 3</Link>
    </div>
  )
}

export default ProductPage