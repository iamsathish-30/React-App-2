import React from "react";
import '../main.css'
//The below two imports are image of persons

import starIcon from '../images/star.png'
//import img from '../images/katie-zaferes.png';
//Single persons detail which has been hardCoded...

const Card = (props) =>{
    console.log(props);
    let badgeText;
    if(props.openSpots===0){
        badgeText = "SOLD OUT";
    }else if(props.country ==="Online"){
        badgeText="ONLINE"
    }
    
    return (
        <div className="card">
            <div className="card-photo-section">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src= {`../src/images/${props.coverImg}`}  className="card-photo"/>
            </div>
            <div className="card-detail">
                <div className="card-star">
                    <img src={starIcon} className="star-image" />
                    <span className="move">{props.stats.rating} </span>
                    <span className="grey">({props.stats.reviewCount})</span>
                    <span className="grey">.{props.location} </span>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-cost"><strong>From ${props.price}</strong> / person</p>
            </div>
        </div>
    );
};

export default Card;