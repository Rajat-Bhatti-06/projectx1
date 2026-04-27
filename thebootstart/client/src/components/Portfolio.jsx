import { motion } from 'framer-motion';
import { ExternalLink, Star, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const projects = [
    {
        emoji: '🏪',
        title: 'Tuck Shop',
        slug: 'tuck-shop',
        category: 'TUCK SHOP',
        desc: 'A clean and modern online storefront for a local tuck shop with product listing, WhatsApp ordering, and daily deals.',
        tags: ['Landing Page', 'WhatsApp Orders', 'Daily Deals'],
        price: '₹4,999',
        rating: 5,
        color: '#f59e0b',
    },
    {
        emoji: '🍭',
        title: 'Mithai Palace',
        slug: 'mithai-palace',
        category: 'SWEET SHOP',
        desc: 'A beautiful online presence for a local sweet shop with product gallery, festive offers, and WhatsApp ordering.',
        tags: ['Landing Page', 'WhatsApp Integration', 'Gallery'],
        price: '₹9,999',
        rating: 5,
        color: '#f59e0b',
    },
    {
        emoji: '🌿',
        title: 'Fresh Squeeze Co.',
        slug: 'fresh-squeeze',
        category: 'JUICE BAR',
        desc: 'Modern juice bar website with menu showcase, health benefits, and online order booking system.',
        tags: ['Menu', 'Online Orders', 'Responsive'],
        price: '₹49,999',
        rating: 5,
        color: '#10b981',
    },
    {
        emoji: '💇‍♀️',
        title: 'Glow Salon Studio',
        slug: 'glow-salon',
        category: 'BEAUTY SALON',
        desc: 'Elegant salon website with service packages, before/after gallery, staff profiles and appointment booking.',
        tags: ['Booking System', 'Gallery', 'Services'],
        price: '₹99,999',
        rating: 5,
        color: '#ec4899',
    },
];

const Portfolio = () => {
    const navigate = useNavigate();

    const handleProjectClick = (slug) => {
        if (slug === 'mithai-palace') {
            navigate('/case-study/mithai-palace');
            window.scrollTo(0, 0);
        } else if (slug === 'fresh-squeeze') {
            navigate('/case-study/fresh-squeeze');
            window.scrollTo(0, 0);
        } else if (slug === 'glow-salon') {
            navigate('/case-study/glow-salon');
            window.scrollTo(0, 0);
        } else if (slug === 'tuck-shop') {
            navigate('/case-study/tuck-shop');
            window.scrollTo(0, 0);
        }
    };

    return (
        <section id="portfolio" className="portfolio-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="section-header"
                >
                    <span className="section-tag-premium">OUR MASTERPIECES</span>
                    <h2 className="section-title-premium">Websites We've Built</h2>
                    <p className="section-subtitle-premium">
                        Meticulously crafted digital experiences that combine stunning aesthetics with high-conversion engineering.
                    </p>
                    <div className="divider-premium" />
                </motion.div>

                <div className="portfolio-grid">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            className="portfolio-card-premium"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
                            whileHover={{
                                y: -15,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            onClick={() => handleProjectClick(project.slug)}
                            style={{ cursor: project.slug ? 'pointer' : 'default' }}
                        >
                            <div className="card-inner-premium">
                                {/* Banner with animated glow */}
                                <div className="portfolio-banner-premium" style={{ background: `radial-gradient(circle at 30% 50%, ${project.color}15 0%, transparent 70%)` }}>
                                    <div className="portfolio-emoji-container" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)`, borderColor: `${project.color}33` }}>
                                        <span className="portfolio-emoji-large">{project.emoji}</span>
                                    </div>
                                    <div className="live-badge-premium">
                                        <CheckCircle2 size={12} className="live-icon" />
                                        <span>Live</span>
                                    </div>
                                </div>

                                <div className="portfolio-content-premium">
                                    <div className="portfolio-header-top">
                                        <span className="portfolio-cat-label" style={{ color: project.color }}>{project.category}</span>
                                        <div className="portfolio-stars-row">
                                            {[...Array(project.rating)].map((_, j) => (
                                                <Star key={j} size={14} fill="#ff9100" color="#ff9100" strokeWidth={0} />
                                            ))}
                                        </div>
                                    </div>

                                    <h3 className="portfolio-title-large">{project.title}</h3>
                                    <p className="portfolio-description-text">{project.desc}</p>

                                    <div className="portfolio-chips-grid">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="portfolio-chip-item">{tag}</span>
                                        ))}
                                    </div>

                                    <div className="portfolio-footer-row">
                                        <div className="portfolio-price-stack">
                                            <span className="price-label">INVESTMENT</span>
                                            <span className="price-value">Built for <span style={{ color: project.color }}>{project.price}</span></span>
                                        </div>
                                        <button
                                            className="portfolio-view-btn"
                                            style={{ '--hover-color': project.color }}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleProjectClick(project.slug);
                                            }}
                                        >
                                            <ExternalLink size={18} />
                                        </button>
                                    </div>
                                </div>

                                {/* Shimmer Border Effect */}
                                <div className="card-shimmer"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="portfolio-cta-premium"
                >
                    <div className="cta-glass-card">
                        <span className="cta-icon">✨</span>
                        <p className="cta-text">Looking for a pixel-perfect website for your business?</p>
                        <button className="btn-premium-action" onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}>
                            Book a Free 15-Min Call
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
