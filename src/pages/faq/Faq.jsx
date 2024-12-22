import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './Faq.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What services do you provide?",
            answer: "I offer companionship services tailored to create memorable and enjoyable experiences. This can include attending events, dinners, or private conversations in a relaxed setting. Every arrangement is designed to ensure both comfort and mutual respect while staying within the boundaries of what is agreed upon in advance."
        },
        {
            question: "Do you offer overnight or extended bookings?",
            answer: "Yes, I am available for overnight or extended engagements. These bookings provide an opportunity to enjoy a more leisurely experience, such as a getaway, an overnight stay, or a weekend retreat. Extended bookings typically require advanced notice and arrangements to ensure all details are perfect for our time together."
        },
        {
            question: "Can I request specific attire or themes for our date?",
            answer: "Absolutely! I am happy to accommodate requests for specific attire, whether it's formal wear, casual wear for a lunch date, or something themed for a special occasion. Please share your preferences ahead of time so I can prepare appropriately."
        },
        {
            question: "What are your rates, and do they include travel expenses?",
            answer: "My rates are as displayed in my Exclusive Rate Card. For bookings that require travel outside of my home city, additional expenses, such as airfare, accommodations, and transportation, may apply. These details will be discussed and agreed upon during the booking process."
        },
        {
            question: "Do you require a deposit?",
            answer: "Yes, I typically require a deposit especially with first timers to secure bookings. This ensures that our time together is reserved and allows me to make necessary arrangements. Returning clients can always choose however is convenient for them as I have met with them and I am very much confident in them. Deposits are non-refundable but may be transferable in the event of rescheduling, depending on the circumstances."
        },
        {
            question: "What is your cancellation policy?",
            answer: "I understand that plans can change. Cancellations made with sufficient notice (usually 6-12 hours, depending on the booking) are accepted without penalty. For late cancellations or no-shows, the deposit will be retained as compensation for lost time. I encourage open communication to avoid misunderstandings."
        },
        {
            question: "How do you ensure discretion?",
            answer: "Discretion is of utmost importance to me. All communication and interactions are kept confidential. I also maintain a professional demeanor in public settings to ensure your privacy. Additionally, I avoid discussing personal or identifying information unless explicitly agreed upon."
        },
        {
            question: "Will my personal information remain confidential?",
            answer: "Yes, your privacy is my priority. Any information you share with me—whether it's your name, contact details, or the nature of our engagement—will remain strictly confidential and will never be shared or stored unnecessarily."
        },
        {
            question: "Do you have requirements for clients?",
            answer: "Yes, I expect clients to treat me with respect, kindness, and professionalism, just as I will treat them. Basic hygiene is also essential to ensure that we both feel comfortable and can enjoy our time together fully. Mutual respect and adherence to boundaries are key to a positive experience."
        },
        {
            question: "Can I bring gifts or offer gratuity?",
            answer: <>
                While gifts or gratuities are never expected, they are always appreciated as thoughtful gestures. If you're unsure about what might be appropriate, I'd be happy to provide suggestions or preferences. Ultimately, the most meaningful "gift" is a respectful and enjoyable interaction.

                <div className="gift-suggestions">
                    <h4>Here are some suggestions for those who are feeling generous:</h4>
                    <ul>
                        <li>Cash</li>
                        <li>Monetary Gifts via Apple Cash or Crypto preferably (more discreet and please ask directly for payment info)</li>
                        <li>In-session refreshments including:
                            <ul>
                                <li>Sparkling Water</li>
                                <li>Vegan Dark Chocolate</li>
                                <li>Fresh Fruits and Vegetables</li>
                                <li>Sparkling Wine</li>
                            </ul>
                        </li>
                        <li>Gift Certificates to:
                            <ul>
                                <li>Amazon</li>
                                <li>Doordash</li>
                                <li>Nordstrom</li>
                                <li>Lululemon</li>
                                <li>Playful Promises</li>
                                <li>Curvy Kate</li>
                                <li>Good Vibes</li>
                            </ul>
                        </li>
                    </ul>
                    <p className="gift-note">(When buying gift certificates for lingerie please make sure the amount of the gift card is enough to buy a bra and panty set at a minimum)</p>
                </div>
            </>
        },
        {
            question: "Are there any services or situations you don't provide?",
            answer: "Yes, I have clear boundaries and only engage in activities that are mutually agreed upon and fall within the scope of my services. Anything illegal, unsafe, or beyond my comfort zone is strictly off-limits. Transparency in communication is essential to ensure a positive experience for both parties."
        },
        {
            question: "Can I extend the booking during our date?",
            answer: "If my schedule allows, I am happy to extend the booking. Please note that extensions will incur additional fees, which must be settled before we continue. It's always best to communicate your preferences early to ensure availability."
        },
        {
            question: "Do you travel to other cities or countries for bookings?",
            answer: "Yes, I am available for travel engagements. Travel bookings require advance notice to make proper arrangements, and all related expenses (such as flights, accommodation, and transfers) are covered by the client. A deposit or full payment may be required to secure travel dates."
        },
        {
            question: "What makes you different from other escorts?",
            answer: "I pride myself on offering a highly personalized and engaging experience. My professionalism, attention to detail, and genuine approach to creating meaningful connections set me apart. I take the time to understand my clients' preferences and ensure every moment together is enjoyable, relaxed, and memorable."
        }
    ];

    return (
        <>
            <Navbar />
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <p className="faq-intro">Find answers to common questions about my services and policies.</p>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                <span className="faq-icon">
                                    {activeIndex === index ? '−' : '+'}
                                </span>
                            </button>
                            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                                {faq.answer}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default FAQ;