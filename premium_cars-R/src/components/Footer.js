import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3>Premium Cars</h3>
                        <p>Your premier destination for quality vehicles with exceptional service and competitive pricing.</p>
                    </div>
                    <div className="footer-column">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#inventory">Inventory</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Vehicle Sales</a></li>
                            <li><a href="#">Financing</a></li>
                            <li><a href="#">Trade-In</a></li>
                            <li><a href="#">Service & Maintenance</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    <p>&copy; 2023 Premium Cars. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;