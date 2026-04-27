import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Rakesh Sharma',
        business: 'Mithai Palace, Delhi',
        emoji: '🍭',
        text: 'TheBootstart made my sweet shop visible online. Within 2 weeks of the website launch, I started getting calls from new customers who found me on Google. Best investment!',
        rating: 4,
        price: '₹4,999',
    },
    {
        name: 'Priya Menon',
        business: 'Glow Salon, Kochi',
        emoji: '💇‍♀️',
        text: 'I was skeptical at first, but the team delivered an absolutely beautiful website for my salon. The appointment booking system has saved me so much time. Highly recommend!',
        rating: 4,
        price: '₹9,999',
    },
    {
        name: 'Arjun Patel',
        business: 'Spice Route, Ahmedabad',
        emoji: '🍕',
        text: 'Our restaurant website looks stunning and professional. Customers love the digital menu. Online orders increased by 40% in the first month. Amazing team!',
        rating: 3,
        price: '₹24,999',
    },
    {
        name: 'Sunita Joshi',
        business: 'Fresh Squeeze, Pune',
        emoji: '🌿',
        text: 'Very affordable pricing and excellent quality. The website was ready in just 5 days. The WhatsApp ordering feature is so convenient for my customers.',
        rating: 4,
        price: '₹4,999',
    },
    {
        name: 'Dr. Rajiv Kumar',
        business: 'CareFirst Clinic, Jaipur',
        emoji: '🏥',
        text: 'Professional, timely, and very communicative throughout the process. My clinic now looks credible online and patient bookings have doubled.',
        rating: 4,
        price: '₹49,999',
    },
    {
        name: 'Meera Agarwal',
        business: 'Trendy Threads, Mumbai',
        emoji: '🧵',
        text: 'The online catalog they built for my boutique is gorgeous. Customers can browse my collection 24/7. Sales have gone up significantly. Worth every rupee!',
        rating: 3,
        price: '₹1,49,999',
    },
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-bg" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Reviews</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-subtitle">Don't just take our word for it. See what real business owners say.</p>
                    <div className="divider" />
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="testimonial-card card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{t.emoji}</div>
                                <div>
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-business">{t.business}</div>
                                </div>
                                <div className="testimonial-price">{t.price}</div>
                            </div>
                            <div className="testimonial-stars">
                                {'⭐'.repeat(t.rating)}
                            </div>
                            <p className="testimonial-text">"{t.text}"</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="testimonials-summary"
                >
                    <div className="summary-stat"><span className="big-num">3.7</span><span>Average Rating</span></div>
                    <div className="summary-divider" />
                    <div className="summary-stat"><span className="big-num">500+</span><span>Websites Delivered</span></div>
                    <div className="summary-divider" />
                    <div className="summary-stat"><span className="big-num">100%</span><span>On-time Delivery</span></div>
                    <div className="summary-divider" />
                    <div className="summary-stat"><span className="big-num">100%</span><span>Client Satisfaction</span></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
