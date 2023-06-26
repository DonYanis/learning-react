import React, { useState } from 'react';

import Header from './components/Header'
import ReactFacts from './components/ReactFacts'


export default function App(){

    const [lightMode, setLightMode] = useState(false)

    function toggleMode() {
        setLightMode(prev => !prev)
    }

  return (
    <div>
      <Header lightMode = {lightMode} toggle = {toggleMode}/>
      <ReactFacts lightMode = {lightMode}/>
    </div>  
  ) 
}