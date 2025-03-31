import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
// import Product from "./Product"
// import { Footer } from './Footer'
import Footer from "../Footer/Design3"
import About from './Pages/About'
import Faq from './Pages/Faq'
import Solution from './Pages/Solution'
import Contact from "./Pages/Contact"
import Products from './Pages/Product'
import ProductDetail from './Pages/ProductDetails'
const Shetup = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Products/>
        <ProductDetail/>

        <Contact/>
        <Solution/>
<Faq/>


        {/* <Product/> */}
        <Footer/>
    </div>
  )
}

export default Shetup