import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will contact you soon.');
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <section id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>Contact Us</h2>
                </div>
                
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <div className="contact-details">
                            <div className="contact-item">
                                <span>📍</span>
                                <div>
                                    <h4>Visit Our Showroom</h4>
                                    <p>123 Automotive Avenue, Motor City, MC 12345</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span>📞</span>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span>✉️</span>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>info@premiumcars.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="contact-form">
                        <h3>Send Us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    className="form-control" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    className="form-control" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message" 
                                    className="form-control" 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;