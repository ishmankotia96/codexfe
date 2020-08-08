import React from 'react'
import '../Styles/header.css';
import logo from "../logo.svg";

function Header() {
    return (
        // <div className="header">
        <nav className="header">
            <img src="logo512.png" alt={logo} className="logo" />
            <ul className="main-nav">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Signup</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </nav>
        // </div>
    )
}

export default Header
