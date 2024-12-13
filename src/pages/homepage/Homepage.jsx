import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';
import Footer from "../../components/Footer";

const Homepage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const carouselImages = {
        desktop: [
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.38%20AM.jpg?alt=media&token=afb10575-963c-4acc-9899-98819ea70d54",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM%20(1).jpg?alt=media&token=226371b8-b524-47e3-ab6e-6c99f0e901ec",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM.jpg?alt=media&token=8fdf0136-d946-4d23-9f1e-6de7d509a937"
        ],
        mobile: [
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WM.jpeg?alt=media&token=f0a4c623-ebe7-415c-8a37-87c3b26cd321", // Replace with your mobile image URLs
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WM1.jpeg?alt=media&token=1f3a9123-167e-4a99-8d50-861d8ca3bbdc",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W3.jpeg?alt=media&token=73ab1b84-eec3-430f-94fa-91501027d0c6"
        ]
    };

    return (
        <div className="page-container">
            <Navbar/>
            <div className="hero-container">
                <Carousel controls={true} indicators={false} interval={3000} className="hero-carousel">
                    {(isMobile ? carouselImages.mobile : carouselImages.desktop).map((imgSrc, index) => (
                        <Carousel.Item key={index}>
                            <img
                                src={imgSrc}
                                alt={`slide ${index + 1}`}
                                className="hero-image"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
                <div className="hero-overlay">
                    <h1 className="hero-title">
                        Your Creamy <br/>
                        Japanese Seductress
                    </h1>
                    <button className="hero-button">Book Me</button>
                </div>
            </div>
            <div className="image-section">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W6.jpeg?alt=media&token=340a4606-39c8-4b7a-bc57-ee4206dfbd6e"
                    alt="Image 1"
                    className="side-image"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W4.jpeg?alt=media&token=ab6479a8-b7f6-4e60-ace5-189ab6375c56"
                    alt="Image 2"
                    className="side-image"
                />
            </div>
            <div className="welcome-section">
                <div className="welcome-content">
                    <h2>WELCOME</h2>
                    <p>Step into a world of enchantment and allure. Let me be your guide to unforgettable moments of
                        pleasure and connection.</p>
                </div>
                <div className="welcome-cta">
                    <h2>HAVEN'T MET YET</h2>
                    <p>If we haven't had the pleasure of meeting yet, let's chat and create something special
                        together.</p>
                    <button className="chat-button">Let's Chat</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Homepage;