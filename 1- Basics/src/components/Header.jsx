import React from "react";
import reactLogo from "../images/logo.png"

export default function Header(props){
    return (
      <header className={props.lightMode ? "light" : ""}>
        <nav className='navbar'>
          <div className="logo">
          <img 
            src={reactLogo} 
            alt="react-logo"
          />
          <h3>ReactFacts</h3>
          </div>
          
          <h4 className="nav-text" onClick={props.toggle}>
          {props.lightMode ? "Dark" : "Light" } Mode
          </h4>
        </nav>
      </header>
    )
}