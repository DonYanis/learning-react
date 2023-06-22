import React from "react"
import airbnbLogo from "../images/airbnb.svg"

export default function Navbar(){
    return (
        <nav className="navbar">
            <img src={airbnbLogo} alt="logo"/>
        </nav>
    )
}