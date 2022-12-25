import React from "react"
import ddd from "./../img/React-icon.svg.png"
export default function Main(){
    return(
        <main className="main">
            <div className="text">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <img className="bag" src={ddd} alt="ddd" />
        </main>
    )
}