import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link,  NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {ProductProvider}  from './ProductContext';
import Home2 from './LoginPadg';
import ProuductDetils from './ProuductDetils';
import ProductList from './ProductList';
import Cart from './Cart';
import Navedar from './Navedar';
import LoginPadg from './LoginPadg';
import RagistrPadg from './RagistrPadg';
import Chackout from './Chackout';
import AuthDit from './AuthDit';
import InputPage from './InputPage'
import Footer from './Footer'





const App = () => {

  return (
    <BrowserRouter>
    <Navedar />
    <ProductProvider>
      
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id"  element={<ProuductDetils />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/Navedar" element={<Navedar />} />
        <Route path="/LoginPadg" element={<LoginPadg />} />
        <Route path="/RagistrPadg" element={<RagistrPadg />} />
        <Route path="/Chackout" element={<Chackout />} />
        <Route path="/AuthDit" element={<AuthDit />} />
        <Route path="/InputPage" element={<InputPage />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </ProductProvider>
    <Footer />

    </BrowserRouter>
  )
}

export default App
