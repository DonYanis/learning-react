import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';
import Products from './components/Products';
import Error from './components/Error';
import Main from './components/Main';
import SingleProduct from './components/SingleProduct';
import ProductsMain from './components/ProductsMain';
import Login from './components/Login';
import { UserProvider } from './contexts/UserContext';

export default function App(){
  
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route index element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="products" element={<ProductsMain/>}>
              <Route index element={<Products />} />
              <Route path=":id" element={<SingleProduct/>}/>
            </Route>
            <Route path="*" element={<Error/>}/>
          </Route>
        </Routes>
      </UserProvider>
    </Router>
  )
}