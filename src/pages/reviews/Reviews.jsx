import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import './reviews.css';
import Footer from "../../components/Footer";
import TawkTo from "../../components/TawkTo";

function Review() {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    });
    const [isFormOpen, setIsFormOpen] = useState(false);

    // Load reviews from localStorage or initialize with defaults
    useEffect(() => {
        const defaultReviews = [
        {
            name: 'Christopher Blake',
            date: 'Jan 2, 2026',
            text: 'Starting the new year with Celina was the best decision I could have made. Her warmth, elegance, and genuine connection made for an unforgettable beginning to 2026.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Dec 31, 2025',
            text: 'Rang in the New Year with the most amazing companion. Celina made every moment of our celebration absolutely magical and memorable.',
        },
        {
            name: 'William Carter',
            date: 'Dec 26, 2025',
            text: 'Post-holiday bliss with Celina. She has an incredible way of making you feel special and appreciated. Truly one of a kind.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Dec 20, 2025',
            text: 'Celina made my holiday season absolutely perfect. Her charm and sophistication are unmatched. Already counting down to our next meeting.',
        },
        {
            name: 'Alexander Hayes',
            date: 'Dec 12, 2025',
            text: 'Every encounter with Celina feels like the first time - exciting, genuine, and unforgettable. She sets the standard for excellence.',
        },
        {
            name: 'Anonymous',
            date: 'Dec 5, 2025',
            text: 'Celina continues to amaze with her grace and beauty. Our evening together was filled with laughter, connection, and pure enjoyment.',
            tag: 'Returning Client',
        },
        {
            name: 'Sebastian Moore',
            date: 'Nov 22, 2025',
            text: 'Thanksgiving week made special by Celina. Her company is a gift that keeps on giving. Grateful for every moment we share.',
        },
        {
            name: 'Anonymous',
            date: 'Nov 10, 2025',
            text: 'Celina has this incredible ability to make time disappear. Hours feel like minutes when you are in her captivating presence.',
            tag: 'Returning Client',
        },
        {
            name: 'James Richardson',
            date: 'Oct 28, 2025',
            text: 'An incredible experience as always. Celina is simply unmatched in her elegance, charm, and ability to make you feel completely at ease. Every moment was pure magic.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Oct 20, 2025',
            text: 'Celina exceeded every expectation I had. Her warmth, intelligence, and genuine care made our time together truly unforgettable. Already looking forward to our next meeting.',
        },
        {
            name: 'Thomas Anderson',
            date: 'Oct 12, 2025',
            text: 'What an amazing experience. Celina has a rare gift for creating genuine connection and making every moment feel special.',
            tag: 'Returning Client',
        },
        {
            name: 'Robert Chen',
            date: 'Oct 5, 2025',
            text: 'Another fantastic encounter with Celina. Her sophistication and natural beauty continue to amaze me. The perfect companion for any occasion.',
        },
        {
            name: 'Anonymous',
            date: 'Sep 28, 2025',
            text: 'Celina continues to amaze me every time we meet. Her presence lights up any room, and her attention to detail is second to none.',
            tag: 'Returning Client',
        },
        {
            name: 'David Williams',
            date: 'Sep 18, 2025',
            text: 'Every encounter with Celina exceeds expectations. She brings a perfect balance of professionalism and genuine warmth that makes the experience feel authentic.',
        },
        {
            name: 'Jonathan Blake',
            date: 'Sep 8, 2025',
            text: 'Celina is the definition of elegance. Our dinner date was filled with stimulating conversation and genuine laughter. She made me feel like the only person in the world.',
            tag: 'Returning Client',
        },
        {
            name: 'Pierre Dubois',
            date: 'Aug 30, 2025',
            text: 'Celina est extraordinaire. Son charme et son élégance sont incomparables. Une expérience que je recommande vivement à tous.',
        },
        {
            name: 'Marcus Sterling',
            date: 'Aug 20, 2025',
            text: 'My third time meeting Celina and each experience has been better than the last. She remembers the little details and makes you feel truly valued.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Aug 10, 2025',
            text: 'Simply put, Celina is perfection. Her ability to create an intimate and comfortable atmosphere is remarkable. Five stars across the board.',
        },
        {
            name: 'Henrik Johansson',
            date: 'Jul 30, 2025',
            text: 'Celina exceeded all my expectations. Her warmth and sophistication made our time together truly remarkable. Cannot wait for our next encounter.',
        },
        {
            name: 'COUPLE - Sarah and Mark Thompson',
            date: 'Jul 18, 2025',
            text: 'Celina was the perfect addition to our special evening. She was professional, respectful, and incredibly intuitive. We cannot recommend her highly enough.',
            tag: 'Returning Client',
        },
        {
            name: 'Anthony Romano',
            date: 'Jul 5, 2025',
            text: 'Celina brings a level of sophistication that is rare to find. Our evening together was filled with great conversation, laughter, and genuine connection.',
        },
        {
            name: 'Anonymous',
            date: 'Jun 25, 2025',
            text: 'I was nervous for my first booking but Celina immediately put me at ease. She is patient, kind, and incredibly understanding. A truly wonderful experience.',
        },
        {
            name: 'Oliver Grant',
            date: 'Jun 14, 2025',
            text: 'Celina is everything you could want in a companion and more. Her intelligence matches her beauty, making for an incredibly fulfilling experience.',
            tag: 'Returning Client',
        },
        {
            name: 'Daniel Morrison',
            date: 'Jun 2, 2025',
            text: 'Celina has a gift for making every moment feel special. Her genuine personality shines through, creating an experience that feels real and meaningful.',
        },
        {
            name: 'Gregory Palmer',
            date: 'May 22, 2025',
            text: 'Celina provides an experience that goes beyond physical attraction. Her emotional intelligence and ability to connect on a deeper level is what truly makes her exceptional.',
        },
        {
            name: 'Anonymous',
            date: 'May 10, 2025',
            text: 'From the moment I met Celina, I knew this would be different. Her presence is calming yet exciting. An absolute pleasure to spend time with.',
            tag: 'Returning Client',
        },
        {
            name: 'Richard Hawkins',
            date: 'Apr 28, 2025',
            text: 'Celina is the complete package - beautiful, intelligent, witty, and genuinely caring. Our time together was nothing short of spectacular.',
        },
        {
            name: 'Anonymous',
            date: 'Apr 15, 2025',
            text: 'Second time meeting Celina and she remembered everything from our first encounter. That level of personal attention is what sets her apart from everyone else.',
            tag: 'Returning Client',
        },
        {
            name: 'Kenneth Wu',
            date: 'Apr 3, 2025',
            text: 'Celina has an incredible ability to make you feel comfortable from the very first moment. Her charm and wit are simply captivating.',
        },
        {
            name: 'Anonymous',
            date: 'Mar 22, 2025',
            text: 'An evening with Celina is like stepping into another world. She creates an atmosphere of pure luxury and genuine connection.',
            tag: 'Returning Client',
        },
        {
            name: 'Victor Mendez',
            date: 'Mar 10, 2025',
            text: 'Celina es absolutamente increíble. Su elegancia y calidez hacen que cada momento sea especial. Una experiencia inolvidable.',
        },
        {
            name: 'Anonymous',
            date: 'Feb 25, 2025',
            text: 'I have met many companions but none compare to Celina. Her authenticity and grace set her apart in every way.',
        },
        {
            name: 'Bradley Foster',
            date: 'Feb 12, 2025',
            text: 'Celina makes you feel like the most important person in the room. Her attention and care are genuine. Highly recommended.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Jan 30, 2025',
            text: 'Starting 2025 with Celina was the best decision. Her warmth and beauty made for an unforgettable evening.',
        },
        {
            name: 'Edward Thornton',
            date: 'Jan 18, 2025',
            text: 'Celina continues to impress. Her professionalism combined with her natural charm creates an experience unlike any other.',
            tag: 'Returning Client',
        },
        {
            name: 'Anonymous',
            date: 'Jan 5, 2025',
            text: 'New year, same exceptional Celina. She never fails to deliver an experience that exceeds all expectations.',
        },
        {
            name: 'Nathan Brooks',
            date: 'Dec 28, 2024',
            text: 'Spent the holidays with Celina and it was absolutely magical. Her presence made everything feel special and memorable.',
        },
        {
            name: 'Anonymous',
            date: 'Dec 15, 2024',
            text: 'Celina has a way of making time stand still. Every moment with her feels precious and meaningful. A true gem.',
            tag: 'Returning Client',
        },
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

        try {
            const savedReviews = localStorage.getItem('reviews');
            if (savedReviews) {
                setReviews(JSON.parse(savedReviews));
            } else {
                setReviews(defaultReviews);
                localStorage.setItem('reviews', JSON.stringify(defaultReviews));
            }
        } catch (error) {
            console.error('Error loading reviews from localStorage:', error);
            setReviews(defaultReviews);
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
