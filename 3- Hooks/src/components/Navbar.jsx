import React from "react";
import Logo from "../images/trollface-png-from-pngfre-39.png"

export default function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar--title">
                <img src={Logo} alt="logo" />
                <h2>Meme Generator</h2>
            </div>
            <p className="navbar--text">Learning react</p>
        </nav>
    )
}