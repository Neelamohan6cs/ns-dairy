// src/routes/AppRoutes.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Header from '../components/Header';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Products from '../pages/Products';


const Paths = () => {
  return (
    <Routes>
      <Route path="/about" element={<About/>} />
      <Route path='/header' element={<Header/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='products' element={<Products/>}/>
    
    </Routes>
  );
};

export default Paths;
