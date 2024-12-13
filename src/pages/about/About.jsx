import React from 'react';
import Navbar from '../../components/Navbar';
import './about.css';
import Footer from "../../components/Footer";

const About = () => {
    const services = [
        { title: "Seductress", description: "I captivate and enthrall. My eyes promise adventure, my lips whisper temptation, and my touch? It's an invitation to lose yourself completely." },
        { title: "Cleaner", description: "I bring sensuality to even the most mundane. Whether clad in sultry attire or nothing at all, I elevate the ordinary to extraordinary." },
        { title: "Voyeur's Delight", description: "I am a living fantasy. Watch me surrender to my cravings, lose myself in unrestrained ecstasy, and invite you to indulge in the visual poetry of my pleasure." },
        { title: "Soul Snatcher", description: "I go beyond the surface, exploring your deepest wants, unraveling your hidden desires, and creating moments that resonate far beyond the physical." },
        { title: "Fantasy Fulfiller", description: "I thrive on bringing your wildest imaginations to life. Share your secrets, and let me craft them into experiences you'll never forget." },
        { title: "Masseuse", description: "My skilled hands make me exceptional—intuitive, soothing, and sensual. Every stroke is deliberate, designed to ease tension while heightening your senses." },
        { title: "Exhibitionist", description: "I revel in being desired and admired. Whether it's a private show or a bold display of confidence, I find beauty and freedom in sharing myself with you." }
    ];

    const gfeServices = [
        "Massage: Allow my hands to explore and soothe, guiding you into a state of unparalleled relaxation and bliss.",
        "Bareback Blowjob: Intimate, raw, and deeply satisfying, it's a connection that dissolves all inhibitions.",
        "Greek: For those who seek a more adventurous path, I offer this experience with care, expertise, and a touch of excitement.",
        "Multiple Shots of Orgasm: Because your satisfaction deserves to be savored again and again."
    ];

    const uniqueQualities = [
        "Unrestricted Connection: I embrace the fullness of intimacy, ensuring our time together is as authentic as it is thrilling.",
        "Unwavering Discretion: Your privacy and comfort are my top priorities. Every moment we share is sacred, safe, and yours alone.",
        "Unmatched Attention: I am attuned to your needs, responsive to your desires, and dedicated to your pleasure.",
        "Unforgettable Passion: My essence is rooted in passion. With me, you'll discover a realm of pleasure you've only dreamed of."
    ];

    return (
        <>
            <Navbar />
            <div className="about-container">
                <header className="about-header">
                    <h1>Step Into a Realm of Ultimate Intimacy</h1>
                    <p>Welcome to my world—a sanctuary where boundaries fade, desires awaken, and every fantasy is not only welcomed but celebrated. I am more than a companion; I am an experience—unfiltered, uninhibited, and unforgettable.</p>
                </header>

                <section className="about-section">
                    <h2>Who Am I?</h2>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section gfe-section">
                    <h2>My Services: The Ultimate Girlfriend Experience (GFE)</h2>
                    <p className="section-intro">What I offer goes far beyond the physical—it's a complete, unrestricted journey into connection, passion, and satisfaction.</p>
                    <div className="gfe-services">
                        {gfeServices.map((service, index) => (
                            <div key={index} className="gfe-item">
                                <p>{service}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section qualities-section">
                    <h2>What Makes Me Different?</h2>
                    <div className="qualities-grid">
                        {uniqueQualities.map((quality, index) => (
                            <div key={index} className="quality-card">
                                <p>{quality}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="about-section travel-section">
                    <h2>Available to Travel</h2>
                    <p>Whether it's a candlelit rendezvous in a luxury suite, a sensual escape to a tropical paradise, or an intimate moment in the privacy of your own space, I am ready to meet you wherever desire calls. My presence is your ticket to indulgence—an experience crafted entirely around your fantasies.</p>
                </section>

                <section className="about-section closing-section">
                    <h2>Are You Ready to Begin?</h2>
                    <p>Watch me surrender to my own desires and lose myself in the fire of our connection. Together, we will explore the boundaries of lust, pushing past limits into a realm of pure satisfaction.</p>
                    <p className="closing-statement">This is your moment. Your fantasy. Your escape.<br />Come closer, and let's create something unforgettable.</p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default About;