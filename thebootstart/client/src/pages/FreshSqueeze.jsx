import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, ArrowUpRight, Home, Grid, BookOpen,
    Download, Bookmark, Settings, LogOut, Star,
    Droplets, Leaf, Zap, MessageSquare, MapPin,
    CheckCircle, TrendingUp, Users, Clock, Search,
    Plus, Heart, Bell, ChevronRight, Sparkles
} from 'lucide-react';
import './FreshSqueeze.css';

const juices = [
    {
        id: 1,
        name: 'Citrus Bomb',
        tagline: 'Pure Vitamin C Rush',
        ingredients: 'Orange · Lemon · Ginger',
        color: '#FF8C00',
        bg: 'linear-gradient(135deg, #FF8C00 0%, #FFB347 100%)',
        rating: 4.9,
        reviews: '2.1K',
        size: '500ml',
        badges: ['Best Seller', 'Energizing'],
        emoji: '🍊',
        benefits: ['Immunity Boost', 'Antioxidants', 'Vitamin C'],
        desc: 'The ultimate citrus blend — freshly pressed oranges, zesty lemon and a kick of ginger to power your day.',
    },
    {
        id: 2,
        name: 'Green Detox',
        tagline: 'Cleanse & Reset',
        ingredients: 'Kale · Apple · Cucumber',
        color: '#22c55e',
        bg: 'linear-gradient(135deg, #166534 0%, #22c55e 100%)',
        rating: 4.8,
        reviews: '1.8K',
        size: '500ml',
        badges: ['Detox', 'Raw'],
        emoji: '🥬',
        benefits: ['Detoxify', 'Rich Iron', 'Alkalize'],
        desc: 'Deep green goodness. Kale, apple and cucumber come together for a reset that goes all the way down.',
    },
    {
        id: 3,
        name: 'Watermelon Wave',
        tagline: 'Summer in a Bottle',
        ingredients: 'Watermelon · Mint · Lime',
        color: '#f43f5e',
        bg: 'linear-gradient(135deg, #881337 0%, #f43f5e 100%)',
        rating: 4.9,
        reviews: '3.4K',
        size: '500ml',
        badges: ['Fan Fav', 'Hydrating'],
        emoji: '🍉',
        benefits: ['Hydration', 'Electrolytes', 'Freshness'],
        desc: 'Ice-cold watermelon crushed with fresh mint and a squeeze of lime. Instant summer vibes.',
    },
    {
        id: 4,
        name: 'Lemon Zing',
        tagline: 'Detox & Glow',
        ingredients: 'Lemon · Honey · Ginger',
        color: '#EAB308',
        bg: 'linear-gradient(135deg, #713F12 0%, #EAB308 100%)',
        rating: 4.7,
        reviews: '1.2K',
        size: '500ml',
        badges: ['Detox'],
        emoji: '🍋',
        benefits: ['Metabolism', 'Gut Health', 'Glow Skin'],
        desc: 'Sour, sweet, spicy — Lemon Zing is the morning shot you need to kickstart your metabolism.',
    },
    {
        id: 5,
        name: 'Beet Rush',
        tagline: 'Blood & Energy',
        ingredients: 'Beetroot · Carrot · Apple',
        color: '#a855f7',
        bg: 'linear-gradient(135deg, #581c87 0%, #a855f7 100%)',
        rating: 4.6,
        reviews: '890',
        size: '500ml',
        badges: ['Energy'],
        emoji: '🫐',
        benefits: ['Stamina', 'Rich Iron', 'Circulation'],
        desc: 'Deep earthy beet balanced with sweet carrot and apple. A powerhouse for athletes and go-getters.',
    },

];

const categories = ['All', 'Citrus', 'Greens', 'Detox', 'Tropical', 'Energy'];

const sidebarItems = [
    { icon: Home, label: 'Home', active: false },
    { icon: Grid, label: 'Menu', active: true },
    { icon: BookOpen, label: 'Orders', active: false },
    { icon: Download, label: 'Offers', active: false },
    { icon: Bookmark, label: 'Saved', active: false },
];

const sidebarBottom = [
    { icon: Settings, label: 'Settings' },
    { icon: LogOut, label: 'Logout' },
];

const FreshSqueeze = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeJuice, setActiveJuice] = useState(juices[0]);
    const [liked, setLiked] = useState([]);
    const [activeSide, setActiveSide] = useState('Menu');

    const toggleLike = (id) => {
        setLiked(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    return (
        <div className="fs-page">

            {/* ── TOP NAV BAR ── */}
            <nav className="fs-topbar">
                <div className="fs-topbar-left">
                    <button onClick={() => navigate('/')} className="fs-back-btn">
                        <ArrowLeft size={16} /> PORTFOLIO
                    </button>
                    <span className="fs-topbar-logo">THEBOOTSTART</span>
                </div>

                {/* Search bar — inspired by template */}
                <div className="fs-search-wrap">
                    <Search size={15} className="fs-search-icon" />
                    <input
                        className="fs-search"
                        placeholder="Search juices, ingredients, wellness goals…"
                        readOnly
                    />
                    <span className="fs-search-badge">MENU PREVIEW</span>
                </div>

                <div className="fs-topbar-right">
                    <div className="fs-user-chip">
                        <div className="fs-user-avatar">🍃</div>
                        <div className="fs-user-info">
                            <span className="fs-user-name">Fresh Squeeze Co.</span>
                        </div>
                    </div>
                    <button className="fs-icon-btn"><Bell size={18} /></button>
                </div>
            </nav>

            {/* ── MAIN SHELL ── */}
            <div className="fs-shell">

                {/* ── LEFT SIDEBAR ── */}
                <aside className="fs-sidebar">
                    <div className="fs-sidebar-brand">
                        <div className="fs-brand-icon">🍋</div>
                    </div>

                    <nav className="fs-sidebar-nav">
                        {sidebarItems.map(({ icon: Icon, label }) => (
                            <button
                                key={label}
                                className={`fs-sidebar-item ${activeSide === label ? 'fs-sidebar-active' : ''}`}
                                onClick={() => setActiveSide(label)}
                                title={label}
                            >
                                <Icon size={20} />
                                <span className="fs-sidebar-label">{label}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="fs-sidebar-bottom">
                        {sidebarBottom.map(({ icon: Icon, label }) => (
                            <button key={label} className="fs-sidebar-item" title={label}>
                                <Icon size={18} />
                                <span className="fs-sidebar-label">{label}</span>
                            </button>
                        ))}
                    </div>
                </aside>

                {/* ── MAIN CONTENT ── */}
                <main className="fs-main">

                    {/* Banner / Header */}
                    <motion.div
                        className="fs-banner"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="fs-banner-text">
                            <p className="fs-banner-eyebrow">CASE STUDY · THEBOOTSTART</p>
                            <h1 className="fs-banner-title">
                                Fresh Squeeze <span>Co.</span>
                            </h1>
                            <p className="fs-banner-sub">A full-stack digital refresh for the modern juice bar — online ordering, brand presence & real growth.</p>
                            <div className="fs-banner-tags">
                                <span className="fs-tag">Premium Project</span>
                                <span className="fs-tag">Full Stack</span>
                                <span className="fs-tag">14-Day Delivery</span>
                            </div>
                        </div>
                        <div className="fs-banner-visual">
                            <div className="fs-banner-circle fs-circle-1"></div>
                            <div className="fs-banner-circle fs-circle-2"></div>
                            <div className="fs-banner-circle fs-circle-3"></div>
                        </div>
                    </motion.div>

                    {/* Category Pills */}
                    <div className="fs-categories">
                        <span className="fs-cat-label">MENU PREVIEW —</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`fs-cat-pill ${activeCategory === cat ? 'fs-cat-active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Section Label */}
                    <div className="fs-section-row">
                        <h2 className="fs-section-title">Signature Blends</h2>
                    </div>

                    {/* Juice Cards Grid */}
                    <div className="fs-juice-grid">
                        {juices.map((juice, i) => (
                            <motion.div
                                key={juice.id}
                                className={`fs-juice-card ${activeJuice.id === juice.id ? 'fs-juice-selected' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.06 }}
                                onClick={() => setActiveJuice(juice)}
                                whileHover={{ y: -5 }}
                            >
                                <div className="fs-juice-card-top" style={{ background: juice.bg }}>
                                    <div className="fs-juice-emoji">{juice.emoji}</div>
                                    <div className="fs-juice-rating">
                                        <Star size={10} fill="currentColor" /> {juice.rating}
                                    </div>
                                    <button
                                        className={`fs-juice-heart ${liked.includes(juice.id) ? 'fs-liked' : ''}`}
                                        onClick={(e) => { e.stopPropagation(); toggleLike(juice.id); }}
                                    >
                                        <Heart size={14} fill={liked.includes(juice.id) ? 'currentColor' : 'none'} />
                                    </button>
                                </div>
                                <div className="fs-juice-card-body">
                                    <h3 className="fs-juice-name">{juice.name}</h3>
                                    <p className="fs-juice-ing">{juice.ingredients}</p>
                                    <div className="fs-juice-badges">
                                        {juice.badges.map(b => (
                                            <span key={b} className="fs-badge">{b}</span>
                                        ))}
                                    </div>
                                    <div className="fs-juice-footer">
                                        <span className="fs-reviews">({juice.reviews} reviews)</span>
                                        <button className="fs-add-btn"><Plus size={14} /></button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Stats Strip */}
                    <div className="fs-stats-strip">
                        {[
                            { icon: TrendingUp, val: '+250%', label: 'Digital Orders' },
                            { icon: Users, val: '5,000+', label: 'Monthly Visitors' },
                            { icon: Star, val: '4.9/5', label: 'Customer Rating' },
                            { icon: Clock, val: '< 1.5s', label: 'Page Load' },
                        ].map(({ icon: Icon, val, label }) => (
                            <div key={label} className="fs-stat-item">
                                <Icon size={20} className="fs-stat-icon" />
                                <span className="fs-stat-val">{val}</span>
                                <span className="fs-stat-lbl">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Recommended section */}
                    <div className="fs-section-row">
                        <h2 className="fs-section-title">How We Built It</h2>
                    </div>
                    <div className="fs-process-row">
                        {[
                            { step: '01', icon: '🎯', label: 'Discovery Call', desc: 'Understood the brand, target customers and revenue goals in 30 mins.' },
                            { step: '02', icon: '🎨', label: 'Brand & Design', desc: 'Created a vibrant, citrus-first brand identity and full UI prototype.' },
                            { step: '03', icon: '⚡', label: 'Development', desc: 'Full-stack build with online ordering, menu management and WhatsApp integration.' },
                            { step: '04', icon: '📈', label: 'Launch & Scale', desc: 'Went live with SEO, Google Maps and conversion analytics on day 14.' },
                        ].map((p, i) => (
                            <motion.div
                                key={p.step}
                                className="fs-process-card"
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="fs-process-emoji">{p.icon}</div>
                                <span className="fs-process-step">{p.step}</span>
                                <h4 className="fs-process-label">{p.label}</h4>
                                <p className="fs-process-desc">{p.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                        className="fs-cta"
                        initial={{ opacity: 0, scale: 0.97 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="fs-cta-content">
                            <p className="fs-cta-eyebrow">READY TO GROW?</p>
                            <h2 className="fs-cta-title">Get Your Juice<br /><span>Brand Online.</span></h2>
                            <p className="fs-cta-sub">From high-converting landing pages to full-stack ecosystems — we deliver digital speed.</p>
                            <div className="fs-cta-btns">
                                <a
                                    href="https://wa.me/919991121929?text=Hi%2C%20I%20want%20to%20build%20a%20website%20for%20my%20juice%20brand"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-cta-primary"
                                >
                                    Start on WhatsApp <ArrowUpRight size={18} />
                                </a>
                                <button onClick={() => navigate('/')} className="fs-cta-ghost">
                                    View Packages
                                </button>
                            </div>
                        </div>
                        <div className="fs-cta-bubbles">
                            <span>🍊</span><span>🍋</span><span>🥝</span><span>🍉</span><span>🥥</span>
                        </div>
                    </motion.div>

                    {/* Footer */}
                    <footer className="fs-footer">
                        <span>© 2026 TheBootstart</span>
                        <span>bootstartagency@gmail.com</span>
                        <span>+91 99911 21929</span>
                    </footer>
                </main>

                {/* ── RIGHT PANEL ── */}
                <aside className="fs-right-panel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeJuice.id}
                            className="fs-panel-inner"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.35 }}
                        >
                            {/* Juice preview card */}
                            <div className="fs-panel-card" style={{ background: activeJuice.bg }}>
                                <div className="fs-panel-emoji">{activeJuice.emoji}</div>
                                <div className="fs-panel-badges-top">
                                    {activeJuice.badges.map(b => (
                                        <span key={b} className="fs-panel-badge-pill">{b}</span>
                                    ))}
                                </div>
                            </div>

                            <h3 className="fs-panel-name">{activeJuice.name}</h3>
                            <p className="fs-panel-tagline">{activeJuice.tagline}</p>

                            <div className="fs-panel-rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill={i < Math.floor(activeJuice.rating) ? '#FACC15' : 'none'} color="#FACC15" />
                                ))}
                                <span>{activeJuice.rating} ({activeJuice.reviews} reviews)</span>
                            </div>

                            {/* Action buttons — replicate template buttons */}
                            <div className="fs-panel-actions">
                                <a
                                    href="https://wa.me/919991121929"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-action-ghost"
                                >
                                    Order Now
                                </a>
                                <a
                                    href="https://wa.me/919991121929?text=Hi%2C%20I%20want%20a%20website%20like%20Fresh%20Squeeze%20Co."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="fs-action-primary"
                                >
                                    <Sparkles size={14} /> Build Mine
                                </a>
                            </div>

                            {/* Quick action row */}
                            <div className="fs-panel-quick">
                                <button className="fs-quick-btn"><MessageSquare size={16} /><span>Chat</span></button>
                                <button
                                    className={`fs-quick-btn ${liked.includes(activeJuice.id) ? 'fs-quick-liked' : ''}`}
                                    onClick={() => toggleLike(activeJuice.id)}
                                >
                                    <Heart size={16} fill={liked.includes(activeJuice.id) ? 'currentColor' : 'none'} />
                                    <span>Save</span>
                                </button>
                                <button className="fs-quick-btn"><MapPin size={16} /><span>Locate</span></button>
                            </div>

                            {/* Details */}
                            <div className="fs-panel-details">
                                <div className="fs-detail-row"><span>Ingredients</span><span>{activeJuice.ingredients}</span></div>
                                <div className="fs-detail-row"><span>Size</span><span>{activeJuice.size}</span></div>
                                <div className="fs-detail-row"><span>Delivery</span><span>WhatsApp Ordering</span></div>
                                <div className="fs-detail-row"><span>Platform</span><span>Full Stack Web App</span></div>
                            </div>

                            {/* Benefits */}
                            <div className="fs-panel-benefits">
                                {activeJuice.benefits.map(b => (
                                    <div key={b} className="fs-benefit-chip">
                                        <Leaf size={12} /> {b}
                                    </div>
                                ))}
                            </div>

                            <p className="fs-panel-desc">{activeJuice.desc}</p>
                        </motion.div>
                    </AnimatePresence>
                </aside>
            </div>
        </div>
    );
};

export default FreshSqueeze;
