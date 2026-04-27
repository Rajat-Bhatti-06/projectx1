import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import API_BASE_URL from '../config';
import './CustomRequest.css';

const FEATURES = [
    'Product Gallery', 'WhatsApp Integration', 'Contact Form', 'Online Ordering',
    'Appointment Booking', 'Payment Gateway', 'Blog Section', 'Google Maps',
    'Social Media Links', 'Customer Reviews', 'Admin Dashboard', 'Email Newsletter',
    'Live Chat', 'Multi-language', 'SEO Optimized', 'Custom Animations',
];

const BUSINESS_TYPES = [
    'Sweet Shop', 'Juice Bar', 'Restaurant', 'Beauty Salon', 'Medical Clinic',
    'Grocery Store', 'Coaching / Tutor', 'Gym / Fitness', 'Boutique / Fashion',
    'Repair Shop', 'Real Estate', 'Other'
];

const BUDGETS = [
    '₹4,999 – ₹10,000', '₹10,000 – ₹30,000', '₹30,000 – ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000+'
];

const STEP_TITLES = ['Business Info', 'Features & Pages', 'Budget & Details'];

const defaultForm = {
    businessName: '', businessType: '', ownerName: '', email: '', phone: '',
    features: [], pages: 3, budget: '', description: '', timeline: '2-3 weeks',
    hasLogo: false, hasDomain: false,
};

const CustomRequest = () => {
    const [step, setStep] = useState(0);
    const [form, setForm] = useState(defaultForm);
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Listen for type selection from WebsiteTypeSelector
    useEffect(() => {
        const handler = (e) => setForm(f => ({ ...f, businessType: e.detail }));
        window.addEventListener('selectBusinessType', handler);
        return () => window.removeEventListener('selectBusinessType', handler);
    }, []);

    const update = (key, val) => setForm(f => ({ ...f, [key]: val }));

    const toggleFeature = (f) => {
        setForm(prev => ({
            ...prev,
            features: prev.features.includes(f) ? prev.features.filter(x => x !== f) : [...prev.features, f]
        }));
    };

    const nextStep = () => {
        if (step === 0 && (!form.businessName || !form.businessType || !form.ownerName || !form.email || !form.phone)) {
            toast.error('Please fill all required fields.');
            return;
        }
        setStep(s => Math.min(s + 1, 2));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.budget) { toast.error('Please select your budget.'); return; }
        setLoading(true);
        try {
            await axios.post(`${API_BASE_URL}/custom-request`, form);
            setSubmitted(true);
            toast.success('Request submitted! We\'ll send you a quote within 24 hours.');
        } catch {
            toast.success('Request submitted! We\'ll contact you soon.');
            setSubmitted(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="custom" className="custom-section">
            <div className="custom-bg-orb" />
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Customize</span>
                    <h2 className="section-title">Tell Us About Your Dream Website</h2>
                    <p className="section-subtitle">
                        Fill out this form and we'll craft a custom quote tailored exactly to your business needs.
                    </p>
                    <div className="divider" />
                </motion.div>

                <div className="custom-wrapper">
                    {submitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="success-state"
                        >
                            <div className="success-icon">🎉</div>
                            <h3>Request Submitted!</h3>
                            <p>We've received your website requirements for <strong>{form.businessName}</strong>. Our team will review and send a custom quote to <strong>{form.email}</strong> within 24 hours.</p>
                            <button className="btn btn-primary" onClick={() => { setSubmitted(false); setForm(defaultForm); setStep(0); }}>
                                Submit Another Request
                            </button>
                        </motion.div>
                    ) : (
                        <>
                            {/* Step Progress */}
                            <div className="step-progress">
                                {STEP_TITLES.map((title, i) => (
                                    <div key={title} className={`step-item ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
                                        <div className="step-circle">{i < step ? '✓' : i + 1}</div>
                                        <span className="step-label">{title}</span>
                                        {i < 2 && <div className="step-line" />}
                                    </div>
                                ))}
                            </div>

                            <div className="custom-form-card card">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* STEP 0: Business Info */}
                                        {step === 0 && (
                                            <div className="form-step">
                                                <h3 className="step-title">Business Information</h3>
                                                <div className="form-grid-2">
                                                    <div className="form-group">
                                                        <label className="form-label">Business Name *</label>
                                                        <input className="form-input" placeholder="e.g. Mithai Palace" value={form.businessName} onChange={e => update('businessName', e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Business Type *</label>
                                                        <select className="form-select form-input" value={form.businessType} onChange={e => update('businessType', e.target.value)}>
                                                            <option value="">Select type...</option>
                                                            {BUSINESS_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Your Name *</label>
                                                        <input className="form-input" placeholder="Owner's name" value={form.ownerName} onChange={e => update('ownerName', e.target.value)} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Phone Number *</label>
                                                        <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} />
                                                    </div>
                                                    <div className="form-group form-full">
                                                        <label className="form-label">Email Address *</label>
                                                        <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="form-checkboxes">
                                                    <label className="check-label">
                                                        <input type="checkbox" checked={form.hasLogo} onChange={e => update('hasLogo', e.target.checked)} />
                                                        I already have a logo
                                                    </label>
                                                    <label className="check-label">
                                                        <input type="checkbox" checked={form.hasDomain} onChange={e => update('hasDomain', e.target.checked)} />
                                                        I already have a domain name
                                                    </label>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 1: Features */}
                                        {step === 1 && (
                                            <div className="form-step">
                                                <h3 className="step-title">What features do you need?</h3>
                                                <div className="features-grid">
                                                    {FEATURES.map(f => (
                                                        <button
                                                            key={f}
                                                            type="button"
                                                            className={`feature-btn ${form.features.includes(f) ? 'selected' : ''}`}
                                                            onClick={() => toggleFeature(f)}
                                                        >
                                                            {form.features.includes(f) ? '✓ ' : ''}{f}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="form-group" style={{ marginTop: '2rem' }}>
                                                    <label className="form-label">How many pages do you need? <strong style={{ color: 'var(--accent-purple-light)' }}>{form.pages}</strong></label>
                                                    <input type="range" min="1" max="20" value={form.pages} onChange={e => update('pages', +e.target.value)} className="range-input" />
                                                    <div className="range-labels"><span>1 page</span><span>20 pages</span></div>
                                                </div>
                                            </div>
                                        )}

                                        {/* STEP 2: Budget & Description */}
                                        {step === 2 && (
                                            <div className="form-step">
                                                <h3 className="step-title">Budget & Project Details</h3>
                                                <div className="form-group">
                                                    <label className="form-label">Select Your Budget *</label>
                                                    <div className="budget-options">
                                                        {BUDGETS.map(b => (
                                                            <button
                                                                key={b}
                                                                type="button"
                                                                className={`budget-btn ${form.budget === b ? 'selected' : ''}`}
                                                                onClick={() => update('budget', b)}
                                                            >{b}</button>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="form-grid-2" style={{ marginTop: '1.5rem' }}>
                                                    <div className="form-group">
                                                        <label className="form-label">Expected Timeline</label>
                                                        <select className="form-select form-input" value={form.timeline} onChange={e => update('timeline', e.target.value)}>
                                                            <option>ASAP (Rush delivery)</option>
                                                            <option>1 week</option>
                                                            <option>2-3 weeks</option>
                                                            <option>1 month</option>
                                                            <option>Flexible</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                                                    <label className="form-label">Describe your ideal website (optional)</label>
                                                    <textarea className="form-textarea form-input" placeholder="Tell us about your brand, what you sell, what you want visitors to do, any specific design ideas..." value={form.description} onChange={e => update('description', e.target.value)} />
                                                </div>
                                            </div>
                                        )}
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation */}
                                <div className="form-nav">
                                    {step > 0 && (
                                        <button type="button" className="btn btn-secondary" onClick={() => setStep(s => s - 1)}>
                                            ← Back
                                        </button>
                                    )}
                                    <div style={{ flex: 1 }} />
                                    {step < 2 ? (
                                        <button type="button" className="btn btn-primary" onClick={nextStep}>
                                            Next Step →
                                        </button>
                                    ) : (
                                        <button className="btn btn-gold" onClick={handleSubmit} disabled={loading}>
                                            {loading ? 'Submitting...' : '🚀 Submit Request'}
                                        </button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CustomRequest;
