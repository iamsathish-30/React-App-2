import React from "react";
import image from'../../images/photo-grid.png';
const Content = () =>{
    return (
        <>
            <div className="section-one">
                <img src={image} alt="photo-grid" className="section-image" />
            </div>
            <div className="section-two">
                <h1 className="section-text">Online Experiences</h1>
                <p className="section-para">Join unique interactive activities led by one of a kind hosts all without leaving home.</p>
            </div>
        </>
    );
};

export default Content;