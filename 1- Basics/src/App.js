import React from 'react';

import Header from './components/Header'
import ReactFacts from './components/ReactFacts'
import { ThemeContextProvider } from './contexts/ThemeContext';

export default function App(){

  return (
    <ThemeContextProvider>
      <Header />
      <ReactFacts />
    </ThemeContextProvider>  
  ) 
}