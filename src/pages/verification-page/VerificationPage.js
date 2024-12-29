import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TawkTo from '../../components/TawkTo';
import './verification-page.css';

const VerificationPage = () => {
    return (
        <>
            <Navbar />
            <TawkTo />
            <div className="verification-container">
                <h1>Professional Profile Verification</h1>

                <section className="verification-section">
                    <h2>Professional Identity</h2>
                    <p>Presenting a distinguished professional with a commitment to excellence, discretion, and sophisticated companionship.</p>
                </section>

                <section className="verification-section">
                    <h2>Overview</h2>
                    <p>A seasoned professional dedicated to providing exceptional, personalized experiences for discerning clients. With a reputation built on trust, elegance, and impeccable standards.</p>
                </section>

                <section className="verification-section">
                    <h2>Professional Attributes</h2>
                    <p>Combining intellectual depth, social grace, and a refined demeanor. Expertly navigating diverse social settings with ease and sophistication.</p>
                </section>

                <section className="verification-section">
                    <h2>Professional Services</h2>
                    <p>Specializing in high-end, personalized companionship. Offering discrete and tailored experiences for professional and social engagements, including event accompaniment and travel companionship.</p>
                </section>

                <section className="verification-section">
                    <h2>Personal Approach</h2>
                    <p>Characterized by emotional intelligence, engaging conversation, and the ability to seamlessly adapt to various social contexts. Committed to creating meaningful, respectful interactions.</p>
                </section>

                <section className="verification-section">
                    <h2>Professional Credentials</h2>
                    <p>Verified and endorsed by leading professional platforms, with a track record of exceptional client satisfaction and professional integrity.</p>
                    <div className="credentials-images">
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/Japanese%20Barbie.png?alt=media&token=457cc58f-7416-4570-8a23-b4cfc3f49702"
                            alt="Professional Portrait"
                            className="verification-image"
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/Japanese%20Barbie%203.png?alt=media&token=4e2a624b-e511-4400-a352-4864601c0926"
                            alt="Professional Presentation"
                            className="verification-image"
                        />
                        <img
                            src="https://firebasestorage.googleapis.com/v0/b/exchange-a72f2.appspot.com/o/Japanese%20Barbie%202.png?alt=media&token=ea459c3f-3446-4624-a702-671011bf181b"
                            alt="Professional Credentials"
                            className="verification-image"
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default VerificationPage;