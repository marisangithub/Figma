import React from 'react'
import Home  from './mainpage/Home'
import About from './Aboutpage/About';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Pricing from './pricing/Pricing';
import Contact from './contactpage/Contact';
import Product from './productpage/Product';
import Allproduct from './allpage/Allproduct';

const App = () => {
  return (
    <>
    
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Pricing/> */}
      {/* <Contact/> */}
      {/* <Product/> */}
      {/* <Allproduct/> */}
    </>
  )
}

export default App
