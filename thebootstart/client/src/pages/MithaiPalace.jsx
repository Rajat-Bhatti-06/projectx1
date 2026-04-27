import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, Star, CheckCircle, MessageCircle } from 'lucide-react';
import './MithaiPalace.css';

const MithaiPalace = () => {
    const navigate = useNavigate();
    const heroRef = useRef(null);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const heroParallax = scrollY * 0.4;

    return (
        <div className="aluk-page">

            {/* ── HERO SECTION ── */}
            <section className="aluk-hero" ref={heroRef}>

                {/* Parallax Background */}
                <div
                    className="aluk-hero-bg"
                    style={{ transform: `translateY(${heroParallax}px) scale(1.1)` }}
                >
                    <img src="/mithai-hero.png" alt="royal gold silk" />
                    <div className="aluk-hero-overlay" />
                </div>

                {/* ── TOP NAV BAR ── */}
                <nav className="aluk-topnav">
                    {/* Left — back + lang */}
                    <div className="aluk-topnav-left">
                        <button className="aluk-lang-btn active" onClick={() => navigate('/')}>← BACK</button>
                        <span className="aluk-topnav-divider">|</span>
                        <span className="aluk-lang-btn">EN</span>
                    </div>

                    {/* Center — brand */}
                    <motion.span
                        className="aluk-brand"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        MITHAI PALACE
                    </motion.span>

                    {/* Right — contact */}
                    <div className="aluk-topnav-right">
                        <a
                            href="https://wa.me/919991121929"
                            target="_blank"
                            rel="noreferrer"
                            className="aluk-contact-icon"
                            title="WhatsApp"
                        >
                            <MessageCircle size={18} />
                        </a>
                    </div>
                </nav>

                {/* ── LEFT SIDEBAR NAV ── */}
                <div className="aluk-sidebar">
                    <div className="aluk-sidebar-line" />
                    <nav className="aluk-sidebar-nav">
                        <a href="#about" className="aluk-sidebar-link">ABOUT</a>
                        <a href="#results" className="aluk-sidebar-link">RESULTS</a>
                        <a href="#process" className="aluk-sidebar-link">PROCESS</a>
                        <a href="#contact" className="aluk-sidebar-link">CONTACT</a>
                    </nav>
                </div>

                {/* ── HERO HEADLINE (right-aligned) ── */}
                <div className="aluk-hero-content">
                    <motion.div
                        className="aluk-headline-wrap"
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <h1 className="aluk-headline">
                            <span className="aluk-hl-line">Traditional</span>
                            <span className="aluk-hl-line">Sweets,</span>
                            <span className="aluk-hl-line aluk-hl-line--accent">
                                <em>Digital</em> Royalty
                            </span>
                        </h1>
                    </motion.div>

                    {/* Horizontal divider */}
                    <motion.div
                        className="aluk-hl-divider"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                    />

                    {/* Description */}
                    <motion.p
                        className="aluk-hero-desc"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        A stunning digital presence built for India's finest mithai shops.
                        WhatsApp ordering, festive galleries, and local SEO — delivered in 48 hours.
                    </motion.p>
                </div>

                {/* ── RIGHT SIDE LABEL ── */}
                <div className="aluk-right-label">
                    <span className="aluk-right-text">DELHI, INDIA</span>
                </div>

                {/* ── CENTER DOT ── */}
                <div className="aluk-center-dot" />

                {/* ── SCROLL BUTTON (bottom left) ── */}
                <motion.a
                    href="#about"
                    className="aluk-scroll-btn"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown size={20} />
                </motion.a>

                {/* ── PROJECT META (bottom right) ── */}
                <div className="aluk-hero-meta">
                    <span className="aluk-meta-item">CLIENT — MITHAI PALACE</span>
                    <span className="aluk-meta-sep">·</span>
                    <span className="aluk-meta-item">₹9,999 · BUSINESS</span>
                    <span className="aluk-meta-sep">·</span>
                    <span className="aluk-meta-item">48 HRS DELIVERY</span>
                </div>
            </section>

            {/* ── ABOUT SECTION ── */}
            <section id="about" className="aluk-about">
                <div className="aluk-about-grid">

                    <motion.div
                        className="aluk-about-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9 }}
                    >
                        <span className="aluk-section-tag">THE CHALLENGE</span>
                        <h2 className="aluk-section-title">
                            A beloved shop,<br />
                            <em>invisible</em> online.
                        </h2>
                        <p className="aluk-section-body">
                            Mithai Palace had generations of loyal customers and award-winning recipes —
                            but no digital presence. High platform fees from food delivery apps were
                            cutting margins. Festival-season orders were still taken by pen and phone.
                        </p>
                        <div className="aluk-about-tags">
                            <span className="aluk-tag">No Online Visibility</span>
                            <span className="aluk-tag">High Commission Losses</span>
                            <span className="aluk-tag">Manual phone orders only</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="aluk-about-right"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                    >
                        <div className="aluk-solution-card">
                            <span className="aluk-solution-tag">THE SOLUTION</span>
                            <h3 className="aluk-solution-title">
                                A stunning digital menu with direct WhatsApp ordering
                            </h3>
                            <p className="aluk-solution-body">
                                We crafted a beautiful royal-themed landing page with a photo product
                                gallery, WhatsApp API integration for instant ordering, Google Maps embed,
                                festival offer banners, and full mobile responsiveness.
                            </p>
                            <ul className="aluk-solution-list">
                                {['Up to 5 pages', 'Mobile & tablet responsive', 'WhatsApp chat integration',
                                    'Photo gallery', 'Google Analytics', '3 revision rounds'].map(f => (
                                        <li key={f}><CheckCircle size={14} />{f}</li>
                                    ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ── RESULTS SECTION ── */}
            <section id="results" className="aluk-results">
                <motion.div
                    className="aluk-results-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="aluk-section-tag aluk-section-tag--gold">IMPACT</span>
                    <h2 className="aluk-results-title">Numbers that matter</h2>
                </motion.div>

                <div className="aluk-stats-row">
                    {[
                        { num: '+3×', label: 'Inquiry Growth', sub: 'In first week after launch' },
                        { num: '48h', label: 'Delivery', sub: 'From kickoff to live website' },
                        { num: '0%', label: 'Commission', sub: 'Direct WhatsApp, no app fees' },
                        { num: '4.9', label: 'Client Score', sub: 'Out of 5.0 satisfaction rating' },
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            className="aluk-stat-card"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7 }}
                        >
                            <span className="aluk-stat-num">{s.num}</span>
                            <span className="aluk-stat-label">{s.label}</span>
                            <span className="aluk-stat-sub">{s.sub}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonial */}
                <motion.div
                    className="aluk-testimonial"
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="aluk-testimonial-stars">
                        {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#c19a49" color="#c19a49" />)}
                    </div>
                    <blockquote className="aluk-testimonial-quote">
                        "TheBootstart helped us go digital in 2 days. Our customers love the WhatsApp ordering!
                        We saw a 3× increase in inquiries in the very first week."
                    </blockquote>
                    <p className="aluk-testimonial-author">— Owner, Mithai Palace Delhi</p>
                </motion.div>
            </section>

            {/* ── PROCESS SECTION ── */}
            <section id="process" className="aluk-process">
                <div className="aluk-process-inner">
                    <motion.div
                        className="aluk-process-left"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="aluk-section-tag">HOW IT WORKS</span>
                        <h2 className="aluk-process-title">
                            From idea<br />
                            to live in<br />
                            <em>48 hours.</em>
                        </h2>
                    </motion.div>

                    <div className="aluk-process-steps">
                        {[
                            { n: '01', title: 'Discovery Call', body: 'We learn about your sweets, specialties and customers in a quick 15-min call.' },
                            { n: '02', title: 'Design Sprint', body: 'A royal-themed design is crafted and approved — often within 24 hours.' },
                            { n: '03', title: 'Development', body: 'Built with WhatsApp integration, gallery, and local SEO. Live in 48 hours.' },
                            { n: '04', title: 'Live & Selling', body: 'Go live, start taking festive orders. We handle all technical setup.' },
                        ].map((p, i) => (
                            <motion.div
                                key={p.n}
                                className="aluk-step"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.6 }}
                            >
                                <span className="aluk-step-num">{p.n}</span>
                                <div className="aluk-step-body">
                                    <h4 className="aluk-step-title">{p.title}</h4>
                                    <p className="aluk-step-desc">{p.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA SECTION ── */}
            <section id="contact" className="aluk-cta">
                <div
                    className="aluk-cta-bg"
                    style={{ backgroundImage: 'url(/mithai-hero.png)' }}
                />
                <div className="aluk-cta-overlay" />

                <motion.div
                    className="aluk-cta-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="aluk-cta-eyebrow">READY FOR YOUR OWN?</span>
                    <h2 className="aluk-cta-title">
                        Your sweet shop<br />
                        deserves a<br />
                        <em>beautiful website.</em>
                    </h2>
                    <p className="aluk-cta-price">Starting at <strong>₹9,999</strong> · Business Package · Delivered in 48 hours</p>
                    <div className="aluk-cta-btns">
                        <a
                            href="https://wa.me/919991121929?text=Hi%2C%20I%20want%20the%20Business%20website%20for%20my%20sweet%20shop"
                            target="_blank"
                            rel="noreferrer"
                            className="aluk-cta-primary"
                        >
                            Get Started — ₹9,999 <ArrowUpRight size={18} />
                        </a>
                        <button onClick={() => navigate('/')} className="aluk-cta-ghost">
                            View All Services
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* ── FOOTER ── */}
            <footer className="aluk-footer">
                <span className="aluk-footer-brand">MITHAI PALACE · THEBOOTSTART</span>
                <span>bootstartagency@gmail.com</span>
                <span>+91 99911 21929</span>
                <span>© 2026</span>
            </footer>

        </div>
    );
};

export default MithaiPalace;
