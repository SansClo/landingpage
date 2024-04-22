import React from 'react';
import logo from './logo.png';

function NavBar() {
    return (
        <nav>
            <img src={logo} alt='Logo' style={{ height: '165px' }}></img> {/* Set the image size as needed */}
            <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
