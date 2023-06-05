import React from "react";
import Nav from './child-components/Nav.jsx';
import Content from "./child-components/Content.jsx";
import '../main.css'
const Header = () =>{
    return (
        <div className="header-component">
            <Nav/>
            <Content/>
        </div>
    );
};

export default Header;