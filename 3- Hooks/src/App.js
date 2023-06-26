import React from 'react';

import Navbar from './components/Navbar';
import Meme from './components/Meme';
import Boxes from './components/Boxes';

export default function App(){
  return (
    <div>
      <Navbar/>
      <Meme/>
      <Boxes/>
    </div>  
  ) 
}