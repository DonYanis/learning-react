import React from "react";
import reactLogo from "../images/logo.png"

export default function Header(){
    return (
      <header>
        <nav className='navbar'>
          <div className="logo">
          <img 
            src={reactLogo} 
            alt="react-logo"
          />
          <h3>ReactFacts</h3>
          </div>
          
          <h4 className="nav-text">
            React course - Project 1
          </h4>
        </nav>
      </header>
    )
}