import React from "react";
import Logo from "../map-pin-line.svg"

export default function Card(props) {
    return (
        <div className="Card">
            <img className="place-image" src={`../images/${props.item.imageUrl}`} alt="" />
            <div className="details">
                <div className="info">
                    <a target="_blank" href={props.item.googleMapsUrl}><img className="location-logo" src={Logo} alt="" /></a>
                    <p className="place">{props.item.location}</p>
                    <a target="_blank" href={props.item.googleMapsUrl}><p className="google-maps">View on Google Maps</p></a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <h6 className="date">{props.item.date}</h6>
                <p className="discription">{props.item.description}</p>
            </div>
        </div>
    )
}