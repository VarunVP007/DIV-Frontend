import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <a href="#" className="logo">PREMIUM CARS</a>
                <nav>
                    <ul>
                        <li><a href="#hero">Home</a></li>
                        <li><a href="#inventory">Inventory</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;