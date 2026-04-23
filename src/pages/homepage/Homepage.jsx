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
            `${process.env.PUBLIC_URL}/images/hero/IMG_0669.PNG`,
            `${process.env.PUBLIC_URL}/images/hero/IMG_0670.PNG`,
            `${process.env.PUBLIC_URL}/images/hero/IMG_2916.PNG`
        ],
        mobile: [
            `${process.env.PUBLIC_URL}/images/hero/IMG_0669.PNG`,
            `${process.env.PUBLIC_URL}/images/hero/IMG_0670.PNG`,
            `${process.env.PUBLIC_URL}/images/hero/IMG_2916.PNG`
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
                    <span className="hero-eyebrow">— An Intimate Encounter —</span>
                    <h1 className="hero-title">
                        <em>Your</em> Creamy<br/>
                        Japanese <em>Seductress</em>
                    </h1>
                    <p className="hero-lede">
                        A private world of quiet indulgence, refined company, and unforgettable evenings.
                    </p>
                    <button className="hero-button" onClick={openChat}>
                        <span>Book Your Intimate Escape</span>
                    </button>
                </div>
                <div className="hero-vignette" aria-hidden="true"></div>
            </div>
            <section className="portrait-section">
                <div className="ornament" aria-hidden="true">
                    <span className="ornament-rule"></span>
                    <span className="ornament-mark">✦</span>
                    <span className="ornament-rule"></span>
                </div>
                <span className="portrait-eyebrow">— Portraits —</span>
                <div className="image-section">
                    <figure className="portrait-frame">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-42-56.jpg`}
                            alt="Celina portrait 1"
                            className="side-image"
                        />
                        <figcaption>No. 01</figcaption>
                    </figure>
                    <figure className="portrait-frame">
                        <img
                            src={`${process.env.PUBLIC_URL}/images/rndms/PHOTO-2024-12-15-14-50-04.jpg`}
                            alt="Celina portrait 2"
                            className="side-image"
                        />
                        <figcaption>No. 02</figcaption>
                    </figure>
                </div>
            </section>
            <section className="welcome-section">
                <div className="welcome-content">
                    <span className="welcome-eyebrow">— Enchantment —</span>
                    <h2>Step into a world of <em>allure</em> with Celina</h2>
                    <p>
                        <span className="drop-cap">W</span>elcome to Celina’s world—a realm where sophistication meets sensuality, and every detail is designed to elevate your experience. Celina is not just a companion; she is a confidante, a muse, and an enchantress who weaves unforgettable moments of passion and connection. With her by your side, you’ll step into a world unlike any other—a space that promises intimacy, excitement, and a touch of daring temptation.
                    </p>
                </div>
                <div className="welcome-divider" aria-hidden="true"></div>
                <div className="welcome-cta">
                    <span className="welcome-eyebrow">— Desire —</span>
                    <h2>Still missing out on <em>what you crave?</em></h2>
                    <p>If we haven’t yet had the chance to indulge in each other’s company, there’s no better time to start. Let’s connect, explore, and create an experience so irresistible it lingers in your mind long after. Don’t just imagine the pleasure—take the step to make it a reality.</p>
                    <button className="chat-button" onClick={openChat}>
                        <span>Let’s get Naughty</span>
                    </button>
                </div>
            </section>
            <Footer />
        </div>
        </>
    );
};

export default Homepage;
