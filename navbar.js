import React from 'react'
import "./navbar.css"

function Navbar() {
    const links={
        color : "red"
    };
    return (
        <div>
            <nav className="navbar">
                <ul>
                    {/* inline styling */}
                    <li style={links}>Home</li> 
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
