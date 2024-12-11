import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div style={styles.logo}>
                <Link to="/" style={styles.navLink}>
                    Japanese Barbie
                </Link>
            </div>
            <ul style={styles.navList}>
                <li>
                    <Link to="/" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/pricing" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Pricing
                    </Link>
                </li>
                <li>
                    <Link to="/reviews" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Reviews
                    </Link>
                </li>
                <li>
                    <Link to="/verification-cards" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Verification Cards
                    </Link>
                </li>
                <li>
                    <Link to="/about" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/gallery" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link to="/faqs" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        FAQs
                    </Link>
                </li>
                <li>
                    <Link to="/rates" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Rates
                    </Link>
                </li>
                <li>
                    <Link to="/contact" style={{ ...styles.navLink, ...styles.navLinkHover }}>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333', // Modern dark background
        padding: '15px 30px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    logo: {
        fontSize: '28px',
        fontWeight: '700',
        color: '#FFD700', // Use a standout color for branding
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: 0,
        padding: 0,
    },
    navLink: {
        color: '#FFFFFF', // Brighter white text
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '500',
        padding: '8px 12px',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    },
    navLinkHover: {
        '&:hover': {
            backgroundColor: '#FFD700',
            color: '#333',
        },
    },
};

export default Navbar;
