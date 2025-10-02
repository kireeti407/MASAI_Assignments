import React from 'react'
import { Routes, Route } from 'react-router-dom'
const AllRoutes =() => {
    return (
            <Routes>
                <Route path="/" element={<Counter/>} />
                <Route path="/products" element={<Products />} />
                <Route path="/login" element={<Login />} />
                <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
    )
}

export default AllRoutes