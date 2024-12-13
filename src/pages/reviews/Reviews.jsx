import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './reviews.css';
import Footer from "../../components/Footer";

function Review() {
    const defaultReviews = [
        {
            name: 'Michael Johnson',
            date: 'Dec 5, 2023',
            text: 'An unforgettable experience! Professional, attentive, and absolutely wonderful. I highly recommend!',
        },
        {
            name: 'Emily Thompson',
            date: 'Nov 28, 2023',
            text: 'Exceeded all my expectations. The attention to detail and level of care were unparalleled. A truly magical experience.',
        },
        {
            name: 'Christopher Davis',
            date: 'Nov 15, 2023',
            text: 'Truly the best experience I’ve ever had. The connection was genuine and natural. I’ll definitely book again!',
        },
        {
            name: 'John Carter',
            date: 'Nov 10, 2023',
            text: 'An exceptional experience that made me feel valued and appreciated. I can’t wait for the next time!',
        },
        {
            name: 'James Anderson',
            date: 'Nov 8, 2023',
            text: 'Incredible attention to detail and such a warm and welcoming personality. Highly recommended.',
        },
        {
            name: 'Daniel Harris',
            date: 'Nov 6, 2023',
            text: 'An absolutely amazing time. I felt completely at ease and enjoyed every moment of it.',
        },
        {
            name: 'William Robinson',
            date: 'Nov 3, 2023',
            text: 'Top-notch service! A perfect mix of professionalism and friendliness. Will definitely return.',
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
                            <h3>{review.name}</h3>
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
