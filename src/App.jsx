import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design  from "./Footer/Design"
// import Design2 from "./Footer/Desing2"
// import Design3 from './Footer/Design3'
import Shetup from './Design3/Shetup'
import ProductDetail from './Design3/Pages/ProductDetails';
import Products from './Design3/Pages/Product';
import CategoryProducts from './Design3/Pages/Category';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Shetup />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/category/:categoryId" element={<CategoryProducts />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
    </>
  )
}

export default App