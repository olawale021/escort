import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import './Homepage.css';
import Footer from "../../components/Footer";
import TawkTo from "../../components/TawkTo";

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
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.38%20AM.jpg?alt=media&token=dff4a874-5cc3-4fe7-9aed-97b6c1b935e4",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM%20(1).jpg?alt=media&token=226371b8-b524-47e3-ab6e-6c99f0e901ec",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM.jpg?alt=media&token=8fdf0136-d946-4d23-9f1e-6de7d509a937"
        ],
        mobile: [
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WM1.jpeg?alt=media&token=1a173558-9b22-4170-8cf5-1a985955c31d",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WM.jpeg?alt=media&token=46124676-2d3f-409b-b093-e52f9a1e97e8",
            "https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W3.jpeg?alt=media&token=3b7d7139-3b16-45aa-bfb8-09906a323086"
        ]
    };

    const openChat = () => {
        if (window.Tawk_API) {
            window.Tawk_API.maximize(); // Open the Tawk.to chat widget
        } else {
            alert("Chat widget is not loaded yet.");
        }
    };

    return (
        <>
            <Navbar/>
            <TawkTo />
        <div className="page-container">
            <div className="hero-container">
                <Carousel controls={false} indicators={false} interval={2000} className="hero-carousel">
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
                    <button className="hero-button" onClick={openChat}>Book Your Intimate Escape</button>
                </div>
            </div>
            <div className="image-section">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W4.jpeg?alt=media&token=ac3a361b-6d3c-4d04-9ef1-def44ba7fae5"
                    alt="Image 1"
                    className="side-image"
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/W6.jpeg?alt=media&token=cd9bae54-b3de-4ab3-8158-0d06e99c6e17"
                    alt="Image 2"
                    className="side-image"
                />
            </div>
            <div className="welcome-section">
                <div className="welcome-content">
                    <h2>STEP INTO A WORLD OF ENCHANTMENT AND ALLURE WITH CELINA</h2>
                    <p>Welcome to Celina’s world—a realm where sophistication meets sensuality, and every detail is designed to elevate your experience. Celina is not just a companion; she is a confidante, a muse, and an enchantress who weaves unforgettable moments of passion and connection. With her by your side, you’ll step into a world unlike any other—a space that promises intimacy, excitement, and a touch of daring temptation.</p>
                </div>
                <div className="welcome-cta">
                    <h2>STILL MISSING OUT ON WHAT YOU CRAVE?</h2>
                    <p>If we haven’t yet had the chance to indulge in each other’s company, there’s no better time to start. Let’s connect, explore, and create an experience so irresistible it lingers in your mind long after. Don’t just imagine the pleasure—take the step to make it a reality.</p>
                    <button className="chat-button" onClick={openChat}>Let's get Naughty</button>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
};

export default Homepage;
