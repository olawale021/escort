import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from 'react-bootstrap/Carousel';

const Homepage = () => {
    return (
        <div style={styles.pageContainer}>
            <Navbar />
            <div style={styles.heroContainer}>
                <Carousel controls={true} indicators={false} interval={3000} style={styles.carousel}>
                    <Carousel.Item>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.38%20AM.jpg?alt=media&token=afb10575-963c-4acc-9899-98819ea70d54"
                            alt="First slide"
                            style={styles.heroImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM%20(1).jpg?alt=media&token=226371b8-b524-47e3-ab6e-6c99f0e901ec"
                            alt="Second slide"
                            style={styles.heroImage}
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/WhatsApp%20Image%202024-12-11%20at%2011.49.41%20AM.jpg?alt=media&token=8fdf0136-d946-4d23-9f1e-6de7d509a937"
                            alt="Third slide"
                            style={styles.heroImage}
                        />
                    </Carousel.Item>
                </Carousel>
                <div style={styles.heroOverlay}>
                    <h1 style={styles.heroTitle}>
                        Your Creamy <br />
                        Japanese Seductress
                    </h1>
                    <button style={styles.heroButton}>Book Me</button>
                </div>
            </div>
            <div style={styles.imageSection}>
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/sample1.jpg?alt=media&token=example1"
                    alt="Image 1"
                    style={styles.sideImage}
                />
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/sample2.jpg?alt=media&token=example2"
                    alt="Image 2"
                    style={styles.sideImage}
                />
            </div>
        </div>
    );
};

const styles = {
    pageContainer: {
        fontFamily: "'Playfair Display', serif",
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        color: '#333',
    },
    heroContainer: {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
    },
    carousel: {
        position: 'relative',
        width: '100%',
        height: '100vh',
    },
    heroImage: {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
    },
    heroOverlay: {
        position: 'absolute',
        top: '35%',
        left: '10%',
        textAlign: 'left',
        padding: '20px',
        color: 'gold',
    },
    heroTitle: {
        fontSize: '5rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: '1.2',
        marginBottom: '20px',
        color: 'gold',
    },
    heroButton: {
        fontSize: '1rem',
        padding: '10px 20px',
        border: '2px solid gold',
        borderRadius: '4px',
        backgroundColor: 'transparent',
        color: 'gold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    },
    imageSection: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '40px 0',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    sideImage: {
        width: '30%',
        height: '400px',
        objectFit: 'cover',
        borderRadius: '8px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '90%',
        },
    },
};

export default Homepage;
