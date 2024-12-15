import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Japanese Barbie</h3>
                    <p>Your ultimate companion for unforgettable moments and genuine connections.</p>
                </div>

                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/rates">Rates</Link></li>
                        <li><Link to="/reviews">Reviews</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <ul>
                        <li>Email: contact@example.com</li>
                        <li>Phone: Available on request</li>
                        <li>Location: Inner City, Sydney</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Available Hours</h3>
                    <ul>
                        <li>Monday - Friday: 8 AM - Late</li>
                        <li>Saturday: 9 AM - Late</li>
                        <li>Sunday: By appointment</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Japanese Barbie. All rights reserved.</p>
                <p>Best viewed by adults (18+)</p>
            </div>
        </footer>
    );
};

export default Footer;