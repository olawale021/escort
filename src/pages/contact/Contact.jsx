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
                                <h3>Email</h3>
                                <p>contact@example.com</p>
                            </div>
                            <div className="contact-item">
                                <h3>Phone</h3>
                                <p>Available upon request</p>
                            </div>
                            <div className="contact-item">
                                <h3>Location</h3>
                                <p>Inner City, Sydney</p>
                            </div>
                            <div className="contact-item">
                                <h3>Hours</h3>
                                <p>Monday - Friday: 8 AM - Late</p>
                                <p>Saturday: 9 AM - Late</p>
                                <p>Sunday: By appointment</p>
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