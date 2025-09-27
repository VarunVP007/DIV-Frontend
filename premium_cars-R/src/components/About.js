import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="section-title">
                    <h2>Why Choose Premium Cars</h2>
                </div>
                
                <div className="about-content">
                    <div className="about-text">
                        <h2>Your Trusted Automotive Partner</h2>
                        <p>With years of experience in the automotive industry, Premium Cars has established itself as a premier destination for quality vehicles.</p>
                        <p>We pride ourselves on our transparent pricing, thorough vehicle inspections, and exceptional customer service. Our team of automotive experts is dedicated to helping you find the perfect vehicle to match your lifestyle and budget.</p>
                        <a href="#contact" className="btn btn-primary">Contact Us Today</a>
                    </div>
                    <div className="about-image">
                        <img src="./img/About.avif" alt="Car dealership" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;