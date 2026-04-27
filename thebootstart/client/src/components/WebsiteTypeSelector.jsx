import { useState } from 'react';
import { motion } from 'framer-motion';
import './WebsiteTypeSelector.css';

const types = [
    { emoji: '🍭', label: 'Sweet Shop', desc: 'Products, offers & WhatsApp order', popular: true },
    { emoji: '🌿', label: 'Juice Bar', desc: 'Menu, health benefits & orders' },
    { emoji: '🍕', label: 'Restaurant', desc: 'Menu, reservations & delivery' },
    { emoji: '💇‍♀️', label: 'Beauty Salon', desc: 'Services, gallery & appointments' },
    { emoji: '🏥', label: 'Medical Clinic', desc: 'Doctors, schedule & appointments' },
    { emoji: '🛒', label: 'Grocery Store', desc: 'Product catalog & delivery area' },
    { emoji: '🎓', label: 'Coaching / Tutor', desc: 'Courses, batches & enquiry' },
    { emoji: '🏋️', label: 'Gym / Fitness', desc: 'Plans, trainers & membership' },
    { emoji: '🧵', label: 'Boutique / Fashion', desc: 'Catalog, sizes & orders' },
    { emoji: '🔧', label: 'Repair Shop', desc: 'Services, pricing & booking' },
    { emoji: '🏠', label: 'Real Estate', desc: 'Listings, map & leads' },
    { emoji: '✨', label: 'Custom / Other', desc: 'Tell us your unique business' },
];

const WebsiteTypeSelector = () => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (type) => {
        setSelected(type.label);
        // Pre-fill the custom request form and scroll to it
        setTimeout(() => {
            const el = document.querySelector('#custom');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
            // Dispatch event to pre-fill the form
            window.dispatchEvent(new CustomEvent('selectBusinessType', { detail: type.label }));
        }, 300);
    };

    return (
        <section id="templates" className="templates-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Choose Your Type</span>
                    <h2 className="section-title">What Kind of Business Do You Have?</h2>
                    <p className="section-subtitle">
                        Select your business type and we'll show you exactly what kind of website we'll build for you.
                    </p>
                    <div className="divider" />
                </motion.div>

                <div className="types-grid">
                    {types.map((type, i) => (
                        <motion.button
                            key={type.label}
                            className={`type-card ${selected === type.label ? 'selected' : ''}`}
                            onClick={() => handleSelect(type)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {type.popular && <span className="type-popular">Popular</span>}
                            <span className="type-emoji">{type.emoji}</span>
                            <span className="type-label">{type.label}</span>
                            <span className="type-desc">{type.desc}</span>
                            {selected === type.label && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="type-check"
                                >✓</motion.span>
                            )}
                        </motion.button>
                    ))}
                </div>

                {selected && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="type-selected-msg"
                    >
                        <span>✅ Great! You selected <strong>{selected}</strong>. Scroll down to tell us more about your business.</span>
                        <button className="btn btn-primary" onClick={() => document.querySelector('#custom')?.scrollIntoView({ behavior: 'smooth' })}>
                            Customize My Website →
                        </button>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default WebsiteTypeSelector;
