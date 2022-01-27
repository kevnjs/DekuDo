import React from 'react'
import '../styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="navBar">
            <div>
                <p className="title">Welcome Home</p>
            </div>
            <div>
                <button className="menu">Menu</button>
            </div>
        </div>
    )
}

export default NavBar;