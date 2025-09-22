import React from 'react';
import Nav from '../Nav';
import './AllProd.css'
import FilterBar from './FilterBar';
import Page2 from './Page2';
import Footer from '../mainpage/Footer';

const Allproduct = () => {
  return (
    <>
    <div className="allbg">
        <Nav/>
    </div>
    <FilterBar/>
    <Page2/>
    <Footer/>
    </>
  )
}

export default Allproduct