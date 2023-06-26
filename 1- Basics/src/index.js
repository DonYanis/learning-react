import React from 'react';
//import ReactDOM  from 'react-dom';
import ReactDOM from 'react-dom/client'

import './styles/index.css';
import App from './App';


//React @17 :
//ReactDOM.render(<Page/>, document.getElementById('root'))

//React @18 :
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);
