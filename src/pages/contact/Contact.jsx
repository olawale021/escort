import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './contact.css';
import TawkTo from "../../components/TawkTo";



function Contact() {
    return (
        <>
            <Navbar />
            <TawkTo />
            <div className="contact-container">
                <h1>Get in Touch</h1>
                <p className="contact-intro">
                    I'm excited to hear from you. Let's create something unforgettable together.
                </p>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <div className="contact-details">
                            <div className="contact-item">
                                <i className="fas fa-phone contact-icon"></i>
                                <p>
                                    <strong>Telephone:</strong>
                                    <a href="tel:+12138019763" target="_blank" rel="noopener noreferrer">+1 (213)
                                        801-9763</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="booking-etiquette">
                    <h2>Booking Etiquette</h2>
                    <ul>
                        <li>Please be respectful and clear in your communication</li>
                        <li>Advanced booking is highly recommended</li>
                        <li>All information shared will be kept strictly confidential</li>
                        <li>Initial deposit may be required for certain bookings</li>
                    </ul>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
