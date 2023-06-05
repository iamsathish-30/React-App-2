import React from "react";
import logo from "../../images/airbnb-logo.png"
import '../../main.css';
const Nav = () =>{
    return (
        <nav className="header-nav">
            <img src={logo} alt="Airbnb logo" className="logo" />
        </nav>
    );
};

export default Nav;