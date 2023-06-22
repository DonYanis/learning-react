import React from 'react';
//import ReactDOM  from 'react-dom';
import ReactDOM from 'react-dom/client'

import './styles/index.css';
import Header from './components/Header'
import ReactFacts from './components/ReactFacts'
import Footer from './components/Footer'


function Page(){
  return (
    <div>
      <Header/>
      <ReactFacts/>
      <Footer/>
    </div>  
  ) 
}

//React @17 :
//ReactDOM.render(<Page/>, document.getElementById('root'))

//React @18 :
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Page/>
);
