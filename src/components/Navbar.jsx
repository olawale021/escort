import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/JAP%20BARBIE.png?alt=media&token=496116f9-0ad2-4fea-ab96-fe6308d1bfa7" // Replace with your logo's path
                        alt="Japanese Barbie Logo"
                        className="logo-image"
                    />
                </Link>
            </div>

            <button className="mobile-menu-button" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Pleasure Den</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>Unveiled Secrets</Link></li>
                <li><Link to="/gallery" onClick={toggleMenu}>Treasure Trove</Link></li>
                <li><Link to="/ratecard" onClick={toggleMenu}>Lustful Rates</Link></li>
                <li><Link to="/reviews" onClick={toggleMenu}>Testaments of Pleasure</Link></li>
                <li><Link to="/verification-cards" onClick={toggleMenu}>Lust Licenses</Link></li>
                <li><Link to="/faqs" onClick={toggleMenu}>FAQs</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
