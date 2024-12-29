import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './reviews.css';
import Footer from "../../components/Footer";
import TawkTo from "../../components/TawkTo";

function Review() {
    const defaultReviews = [
        {
            name: 'Michael',
            date: 'Dec 5, 2024',
            text: 'Celina redefines excellence. Her captivating presence, genuine warmth, and meticulous attention to detail made our time together nothing short of enchanting. She truly delivers an experience that stays with you long after.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Nov 28, 2024',
            text: 'From the moment we met, Celina’s elegance and poise took my breath away. She blends charm, intelligence, and a deep sense of connection into an experience that feels effortlessly natural and deeply fulfilling.',
        },
        {
            name: 'Christopher Davis',
            date: 'Nov 15, 2024',
            text: 'Celina offers far more than just companionship; she provides a transformative experience. Her energy is magnetic, her beauty is radiant, and her company leaves you feeling genuinely valued and satisfied.',
            tag: 'Returning Client',
        },
        {
            name: 'COUPLE - Emily and Bruce Keller',
            date: 'Nov 10, 2024',
            text: 'Beyond her stunning appearance, Celina possesses a rare blend of intelligence, wit, and passion. She creates a connection that feels genuine, making our time together unforgettable.',
            tag: 'Returning Client',
        },
        {
            name: 'Alan Fischer',
            date: 'May 8, 2024',
            text: 'From start to finish, Celina ensures an impeccable experience. Her attention to detail, captivating charm, and genuine care make her a one-of-a-kind professional.',
        },
        {
            name: 'Anonymous',
            date: 'Apr 6, 2024',
            text: 'With Celina, time seems to stand still. Her ability to engage, excite, and enchant is unparalleled. A session with her is more than an appointment; it’s a work of art.',
            tag: 'Returning Client',
        },
        {
            name: 'Ben Szchrowzki',
            date: 'Jan 13, 2024',
            text: 'Celina is in a league of her own. Her sophistication, intelligence, and undeniable beauty make her the ultimate companion for anyone seeking the best of the best.',
        },
        {
            name: 'Müller Schmidt',
            date: 'Dec 6, 2024',
            text: 'Words fail to capture how exceptional Celina truly is. She offers a bespoke experience, tailored perfectly to your desires, leaving you completely satisfied and eager for more.',
        },
        {
            name: 'William',
            date: 'Nov 3, 2023',
            text: 'Her reputation as one of the finest escorts is well-earned. Her beauty, intelligence, and ability to connect on every level made our encounter deeply memorable and uniquely satisfying.',
        },
        {
            name: 'Javier López',
            date: 'Oct 1, 2023',
            text: 'Celina es pura perfección. Su encanto, elegancia y pasión me dejaron completamente satisfecho. ¡Espero nuestra próxima cita!',
            tag: 'Returning Client',
        },
        {
            name: 'Santiago Pérez',
            date: 'Aug 27, 2023',
            text: 'La experiencia con Celina fue inolvidable. Su atención y cuidado personal hacen de cada momento algo único y especial.',
        },
        {
            name: 'Alex Murphy',
            date: 'May 20, 2022',
            text: 'Celina never disappoints. As a returning client, I can confidently say her services are unmatched in quality, care, and connection.',
            tag: 'Returning Client',
        },
        {
            name: 'Luis Martínez',
            date: 'Jan 22, 2022',
            text: 'Celina es simplemente increíble. Su sonrisa ilumina cualquier habitación, y su presencia hace que todo se sienta mágico.',
        },
        {
            name: 'Anonymous',
            date: 'Jan 12, 2022',
            text: 'Every moment with Celina feels like a dream. Her attention, care, and passion are truly one of a kind. Highly recommended!',
            tag: 'Returning Client',
        },
    ];

    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    });
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Load reviews from localStorage or initialize with defaults
    useEffect(() => {
        try {
            const savedReviews = localStorage.getItem('reviews');
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            } else {
                // Save defaultReviews to localStorage if not already saved
                setReviews(defaultReviews);
                localStorage.setItem('reviews', JSON.stringify(defaultReviews));
            }
        } catch (error) {
            console.error('Error loading reviews from localStorage:', error);
            setReviews(defaultReviews); // Fallback to default reviews
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReview((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newReview.name.trim() || !newReview.text.trim()) {
            alert('Please fill in both fields before submitting your review.');
            return;
        }

        const reviewToAdd = {
            ...newReview,
            date: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
            }),
        };

        const updatedReviews = [reviewToAdd, ...reviews];
        setReviews(updatedReviews);

        // Save to localStorage
        try {
            localStorage.setItem('reviews', JSON.stringify(updatedReviews));
        } catch (error) {
            console.error('Error saving reviews to localStorage:', error);
        }

        // Reset form
        setNewReview({ name: '', text: '' });
        setIsFormOpen(false);
    };

    const handleCancel = () => {
        setNewReview({ name: '', text: '' });
        setIsFormOpen(false);
    };

    return (
        <>
            <Navbar />
            <TawkTo />
            <div className="review-container">
                <h1>Client Reviews</h1>
                <p>Here's what some of my clients have to say about their experience.</p>

                <button
                    className="add-review-button"
                    onClick={() => setIsFormOpen(!isFormOpen)}
                >
                    {isFormOpen ? 'Cancel' : 'Add Your Review'}
                </button>

                {isFormOpen && (
                    <form className="review-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newReview.name}
                                onChange={handleInputChange}
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="text">Your Review:</label>
                            <textarea
                                id="text"
                                name="text"
                                value={newReview.text}
                                onChange={handleInputChange}
                                placeholder="Share your experience"
                                rows="4"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-review-button">
                            Submit Review
                        </button>
                        <button
                            type="button"
                            className="cancel-review-button"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </form>
                )}

                <div className="review-list">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <h3>
                                {review.name}{' '}
                                {review.tag && <span className="review-tag">{review.tag}</span>}
                            </h3>
                            <p className="review-date">{review.date}</p>
                            <p>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Review;
