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
                <Link to="/">Japanese Barbie</Link>
            </div>

            <button className="mobile-menu-button" onClick={toggleMenu}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link to="/ratecard" onClick={toggleMenu}>Exclusive Rate Card</Link></li>
                <li><Link to="/reviews" onClick={toggleMenu}>Reviews</Link></li>
                <li><Link to="/verification-cards" onClick={toggleMenu}>Verification Cards</Link></li>
                <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                <li><Link to="/faqs" onClick={toggleMenu}>FAQs</Link></li>
                <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;