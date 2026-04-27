import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import './Navbar.css';

const navLinks = [
    { label: 'Work', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'Templates', href: '#templates' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMenuOpen(false);
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <div className="navbar-inner">
                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <div className="logo-icon">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <span className="logo-text">The<span className="logo-accent">Bootstart</span></span>
                </a>

                {/* Desktop Links */}
                <ul className="navbar-links">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <button className="nav-link" onClick={() => handleNavClick(link.href)}>
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <button className="btn btn-primary navbar-cta" onClick={() => handleNavClick('#booking')}>
                    Book Free Call
                </button>

                {/* Mobile menu toggle */}
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <button key={link.label} className="mobile-nav-link" onClick={() => handleNavClick(link.href)}>
                                {link.label}
                            </button>
                        ))}
                        <button className="btn btn-primary" onClick={() => handleNavClick('#booking')} style={{ width: '100%', justifyContent: 'center' }}>
                            Book Free Call
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
