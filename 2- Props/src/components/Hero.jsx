import React from "react"
import mainImage from "../images/main.png"

export default function Hero(){
    return (
        <section className="container">
            <div className="container--text">
                <h1 className="container--title">Online Experiences</h1>
                <p className="container--text">Join a unique interacrive activities led by one-of-a-kind hosts-all without leaving home</p>
            </div>
            <img src={mainImage} alt="main-img"/>
        </section>
    )
}