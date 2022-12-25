import React from "react"
import icon from "./../img/React-icon.svg.png"
export default function Navbar(){
    return(
        <nav className="navbar">
            <div className="nav-left">
                <img src={icon} alt="atom" />
                <h2>ReactFacts</h2>
            </div>
            <div className="nav-right">
                <p>React Course-Project 1</p>
            </div>
        </nav>
    )
}