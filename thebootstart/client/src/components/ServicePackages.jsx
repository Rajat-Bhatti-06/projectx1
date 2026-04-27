import { motion } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';
import './ServicePackages.css';

const packages = [
    {
        name: 'Starter',
        icon: <Zap size={24} />,
        price: '₹4,999',
        priceRange: '',
        duration: '3–5 days',
        tagline: 'Perfect to get online fast',
        color: '#3b82f6',
        features: [
            'Single landing page',
            'Mobile responsive',
            'Contact form',
            'WhatsApp button',
            'Basic SEO setup',
            'Google Maps embed',
            '1 revision round',
        ],
        notIncluded: ['Online store', 'Booking system', 'Custom domain'],
        popular: false,
    },
    {
        name: 'Business',
        icon: <Star size={24} />,
        price: '₹9,999',
        priceRange: '',
        duration: '7–10 days',
        tagline: 'Most popular for small businesses',
        color: '#7c3aed',
        features: [
            'Up to 5 pages',
            'Mobile & tablet responsive',
            'Contact + enquiry form',
            'Photo/product gallery',
            'Google Analytics',
            'Social media links',
            'WhatsApp chat integration',
            'Domain setup assistance',
            '3 revision rounds',
        ],
        notIncluded: ['Payment gateway', 'Custom animations'],
        popular: true,
    },
    {
        name: 'Professional',
        icon: <Crown size={24} />,
        price: '₹49,999',
        priceRange: '',
        duration: '2–3 weeks',
        tagline: 'For growing businesses',
        color: '#f59e0b',
        features: [
            'Up to 15 pages',
            'Online booking / appointments',
            'Payment gateway (Razorpay)',
            'Admin dashboard',
            'Custom animations',
            'Blog section',
            'Email newsletter',
            'Advanced SEO',
            'Speed optimization',
            'Unlimited revisions',
        ],
        notIncluded: [],
        popular: false,
    },
    {
        name: 'Enterprise',
        icon: '🏢',
        price: '₹99,999',
        priceRange: '',
        duration: '1–2 months',
        tagline: 'Full-scale digital solution',
        color: '#ec4899',
        features: [
            'Full e-commerce store',
            'Custom web app',
            'User authentication',
            'Database management',
            'API integrations',
            '3D animations',
            'Multi-language',
            'Priority support (1 year)',
            'Monthly performance report',
            'Everything in Professional',
        ],
        notIncluded: [],
        popular: false,
    },
];

const ServicePackages = () => {
    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <section id="services" className="services-section">
            <div className="services-bg-orb" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Pricing</span>
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">
                        No hidden fees. No surprises. Pick a plan that fits your budget and we'll build something amazing together.
                    </p>
                    <div className="divider" />
                </motion.div>

                <div className="packages-grid">
                    {packages.map((pkg, i) => (
                        <motion.div
                            key={pkg.name}
                            className={`package-card card ${pkg.popular ? 'popular' : ''}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            {pkg.popular && (
                                <div className="popular-badge">⭐ Most Popular</div>
                            )}

                            <div className="package-header" style={{ borderColor: `${pkg.color}33` }}>
                                <div className="package-icon" style={{ background: `${pkg.color}22`, color: pkg.color, borderColor: `${pkg.color}44` }}>
                                    {typeof pkg.icon === 'string' ? pkg.icon : pkg.icon}
                                </div>
                                <h3 className="package-name">{pkg.name}</h3>
                                <p className="package-tagline">{pkg.tagline}</p>
                                <div className="package-price">
                                    <span className="price-from">from</span>
                                    <span className="price-main" style={{ color: pkg.color }}>{pkg.price}</span>
                                </div>
                                <div className="price-range">{pkg.priceRange}</div>
                                <div className="package-duration">⏱ Delivery: {pkg.duration}</div>
                            </div>

                            <div className="package-features">
                                {pkg.features.map(f => (
                                    <div key={f} className="feature-item">
                                        <span className="feature-check" style={{ color: pkg.color }}>✓</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                                {pkg.notIncluded.map(f => (
                                    <div key={f} className="feature-item not-included">
                                        <span className="feature-x">✕</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={`btn package-btn ${pkg.popular ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => scrollTo('#booking')}
                                style={!pkg.popular ? { borderColor: `${pkg.color}55`, color: pkg.color } : {}}
                            >
                                Buy Now
                            </button>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="services-note"
                >
                    <p>💡 Not sure which plan is right for you? <button className="link-btn" onClick={() => scrollTo('#booking')}>Book a free 15-min call</button> — we'll recommend the perfect fit for your business.</p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicePackages;
