import React from "react";
import reactLogo from "../images/logo.png"
import { useTheme, useUpdateTheme } from "../contexts/ThemeContext";

export default function Header(){

  const theme = useTheme()
  const updateTheme = useUpdateTheme()

  const className = theme ? "" : "light"
  return (
    <header className={className}>
      <nav className='navbar'>
        <div className="logo">
        <img 
          src={reactLogo} 
          alt="react-logo"
        />
        <h3>ReactFacts</h3>
        </div>
        
        <h4 className={"nav-text " + className} onClick={updateTheme}>
        {theme ? "Light" : "Dark" } Mode
        </h4>
      </nav>
    </header>
  )
}