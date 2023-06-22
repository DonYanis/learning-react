import React from "react"
import star from "../images/Star 1.svg"

export default function Card({img, rating, ratingCount, location, title, price, openSpots}){
    return (
        <div className="card">
            {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <div className="card--image">
                <img src={require(`../images/${img}`)} alt="card" />
            </div>
            <div className="card--stats">
                <img src={star} alt="star" />
                <span className="ratings ">{rating}</span>
                <span className="ratings-number gray">({ratingCount}) - </span>
                <span className="location gray">{location}</span>
            </div>
            <p>{title}</p>
            <p>From ${price} / person</p>
        </div>
    )
}