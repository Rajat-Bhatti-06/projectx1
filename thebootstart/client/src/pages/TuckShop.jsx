import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, ArrowUpRight, Smartphone, MessageSquare,
    MapPin, Search, Zap, ShoppingCart, Clock, CheckCircle, Star, Users
} from 'lucide-react';
import './TuckShop.css';

const TuckShop = () => {
    const navigate = useNavigate();

    return (
        <div className="cs-page">

            {/* ── NAV ── */}
            <nav className="cs-nav">
                <button onClick={() => navigate('/')} className="cs-back-btn">
                    <ArrowLeft size={16} /> PORTFOLIO
                </button>
                <span className="cs-nav-logo">THEBOOTSTART</span>
                <a
                    href="https://wa.me/919991121929"
                    target="_blank"
                    rel="noreferrer"
                    className="cs-nav-cta"
                >
                    Hire Us <ArrowUpRight size={14} />
                </a>
            </nav>

            {/* ── HEADER ── */}
            <header className="cs-header">
                <motion.div
                    className="cs-header-inner"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="cs-eyebrow">THEBOOTSTART</p>
                    <h1 className="cs-headline">CASE STUDY</h1>
                    <div className="cs-header-meta">
                        <span className="cs-meta-tag">Client — Local Tuck Shop</span>
                        <span className="cs-meta-dot" />
                        <span className="cs-meta-tag">Package — Starter ₹4,999</span>
                        <span className="cs-meta-dot" />
                        <span className="cs-meta-tag">Delivery — 5 Days</span>
                    </div>
                </motion.div>

                {/* Big category label */}
                <div className="cs-header-side">
                    <span className="cs-side-label">DIGITAL STOREFRONT</span>
                </div>
            </header>

            {/* ── SUB-HEADER STRIPE ── */}
            <div className="cs-stripe">
                <span>CLEAN DESIGN</span>
                <span className="cs-stripe-dot">✦</span>
                <span>FAST DELIVERY</span>
                <span className="cs-stripe-dot">✦</span>
                <span>MOBILE FIRST</span>
                <span className="cs-stripe-dot">✦</span>
                <span>WHATSAPP ORDERS</span>
                <span className="cs-stripe-dot">✦</span>
                <span>LOCAL SEO</span>
            </div>

            {/* ── BENTO GRID ── */}
            <section className="cs-bento-section">
                <div className="cs-bento">

                    {/* Card A – Hero intro (dark) */}
                    <motion.div
                        className="cs-card cs-card-dark cs-card-a"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <ShoppingCart size={40} className="cs-card-icon" />
                        <h2 className="cs-card-big-title">
                            GET YOUR<br />SHOP<br /><em>ONLINE.</em>
                        </h2>
                        <p className="cs-card-sub">
                            A high-speed digital storefront built for local retailers. Maximum impact, minimum friction.
                        </p>
                    </motion.div>

                    {/* Card B – Price stat (orange) */}
                    <motion.div
                        className="cs-card cs-card-orange cs-card-b"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <p className="cs-card-label">Starting Investment</p>
                        <p className="cs-card-stat">₹4,999</p>
                        <p className="cs-card-stat-sub">Starter Pack · 3–5 day delivery</p>
                    </motion.div>

                    {/* Card C – Features list (light) */}
                    <motion.div
                        className="cs-card cs-card-light cs-card-c"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                    >
                        <p className="cs-card-label-dark">What's included</p>
                        <ul className="cs-feature-list">
                            {[
                                'Single landing page',
                                'Mobile responsive',
                                'WhatsApp button',
                                'Contact form',
                                'Basic SEO setup',
                                'Google Maps embed',
                                '1 revision round',
                            ].map(f => (
                                <li key={f}><CheckCircle size={14} /> {f}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card D – Mobile stat (dark) */}
                    <motion.div
                        className="cs-card cs-card-dark cs-card-d"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Smartphone size={32} className="cs-card-icon-sm" />
                        <p className="cs-card-stat-md">100%</p>
                        <p className="cs-card-label-light">Mobile Responsive</p>
                        <p className="cs-card-desc">
                            Optimised for every screen — phones, tablets, desktops.
                        </p>
                    </motion.div>

                    {/* Card E – WhatsApp (orange dark) */}
                    <motion.div
                        className="cs-card cs-card-orange-dark cs-card-e"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                    >
                        <MessageSquare size={32} className="cs-card-icon-sm" />
                        <p className="cs-card-stat-md">Direct</p>
                        <p className="cs-card-label-light">WhatsApp Orders</p>
                        <p className="cs-card-desc">
                            Customers order straight to your WhatsApp — no app needed.
                        </p>
                    </motion.div>

                    {/* Card F – Reviews stat (light) */}
                    <motion.div
                        className="cs-card cs-card-light cs-card-f"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="cs-stars">
                            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
                        </div>
                        <p className="cs-card-stat-dark">4.9/5</p>
                        <p className="cs-card-label-dark">Client Satisfaction Score</p>
                    </motion.div>

                    {/* Card G – SEO wide (dark) */}
                    <motion.div
                        className="cs-card cs-card-dark cs-card-g"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.35 }}
                    >
                        <div className="cs-card-row">
                            <div>
                                <Search size={28} className="cs-card-icon-sm" />
                                <p className="cs-card-stat-md">Top 3</p>
                                <p className="cs-card-label-light">Local Google Ranking</p>
                            </div>
                            <div className="cs-card-divider" />
                            <div>
                                <Zap size={28} className="cs-card-icon-sm" />
                                <p className="cs-card-stat-md">&lt; 2s</p>
                                <p className="cs-card-label-light">Page Load Time</p>
                            </div>
                            <div className="cs-card-divider" />
                            <div>
                                <Users size={28} className="cs-card-icon-sm" />
                                <p className="cs-card-stat-md">+40%</p>
                                <p className="cs-card-label-light">New Customer Calls</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card H – Quote (cream) */}
                    <motion.div
                        className="cs-card cs-card-cream cs-card-h"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <p className="cs-card-quote">
                            "Within 2 weeks of launching I was getting calls from new customers who found me on Google. Best ₹4,999 I ever spent."
                        </p>
                        <p className="cs-card-quote-author">— Sunita Joshi, Fresh Squeeze, Pune</p>
                    </motion.div>

                    {/* Card I – Maps (orange tile) */}
                    <motion.div
                        className="cs-card cs-card-orange cs-card-i"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.45 }}
                    >
                        <MapPin size={32} className="cs-card-icon-sm" />
                        <p className="cs-card-stat-md">Maps</p>
                        <p className="cs-card-label-dark-sm">Google Maps Embedded</p>
                    </motion.div>

                </div>
            </section>

            {/* ── PROCESS STRIP ── */}
            <section className="cs-process">
                <div className="cs-process-inner">
                    {[
                        { step: '01', label: 'Kickoff Call', desc: 'We understand your business and goals in a 15-min discovery call.' },
                        { step: '02', label: 'Design Sprint', desc: 'Your website is designed and approved within 24 hours.' },
                        { step: '03', label: 'Development', desc: 'Built with blazing speed, ready in 3–5 working days.' },
                        { step: '04', label: 'Live & Growing', desc: 'Go live, start getting customers. We handle the tech.' },
                    ].map((p, i) => (
                        <motion.div
                            key={p.step}
                            className="cs-process-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <span className="cs-process-step">{p.step}</span>
                            <h4 className="cs-process-label">{p.label}</h4>
                            <p className="cs-process-desc">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ── CTA BLOCK ── */}
            <section className="cs-cta">
                <motion.div
                    className="cs-cta-inner"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <p className="cs-cta-eyebrow">READY TO START?</p>
                    <h2 className="cs-cta-title">
                        GET YOUR<br /><span className="cs-cta-accent">TUCK SHOP</span><br />ONLINE TODAY.
                    </h2>
                    <div className="cs-cta-price">
                        Starting at <strong>₹4,999</strong> · Delivered in 5 days
                    </div>
                    <div className="cs-cta-btns">
                        <a
                            href="https://wa.me/919991121929?text=Hi%2C%20I%20want%20to%20get%20the%20Starter%20website%20for%20my%20tuck%20shop%20at%20%E2%82%B94%2C999"
                            target="_blank"
                            rel="noreferrer"
                            className="cs-btn-primary"
                        >
                            Get Started — ₹4,999 <ArrowUpRight size={18} />
                        </a>
                        <button onClick={() => navigate('/')} className="cs-btn-ghost">
                            View All Services
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="cs-footer">
                <span>© 2026 TheBootstart</span>
                <span>bootstartagency@gmail.com</span>
                <span>+91 99911 21929</span>
            </footer>
        </div>
    );
};

export default TuckShop;
