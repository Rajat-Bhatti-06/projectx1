import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Calendar, Clock, Phone, Mail, User, Building2 } from 'lucide-react';
import API_BASE_URL from '../config';
import './BookMeeting.css';

const TIMES = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM',
];

const BookMeeting = () => {
    const [form, setForm] = useState({
        name: '', email: '', phone: '', businessName: '',
        preferredDate: '', preferredTime: '', message: ''
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.phone || !form.preferredDate || !form.preferredTime) {
            toast.error('Please fill all required fields.');
            return;
        }
        setLoading(true);
        try {
            const resp = await axios.post(`${API_BASE_URL}/booking`, form);
            if (resp.data.success) {
                setSubmitted(true);
                toast.success('Meeting booked! Check your email for confirmation.');
            } else {
                toast.error(resp.data.message || 'Failed to book meeting.');
            }
        } catch (err) {
            console.error('Booking error detail:', err);
            toast.error(err.response?.data?.message || 'Server error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 1);
    const minDateStr = minDate.toISOString().split('T')[0];

    return (
        <section id="booking" className="booking-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <span className="section-tag">Free Consultation</span>
                    <h2 className="section-title">Book a Free 15-Min Call</h2>
                    <p className="section-subtitle">
                        No obligation. We'll understand your business needs and suggest the perfect website solution.
                    </p>
                    <div className="divider" />
                </motion.div>

                <div className="booking-layout">
                    {/* Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="booking-info"
                    >
                        <h3>What to Expect in the Call</h3>
                        <ul className="booking-points">
                            {[
                                '🎯 We understand your business & goals',
                                '💡 We suggest the best website type for you',
                                '💰 We give you a transparent cost estimate',
                                '🗓 We discuss timeline and delivery',
                                '✅ Zero pressure — totally free!',
                            ].map(p => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>
                        <div className="booking-contact">
                            <p>Prefer to reach us directly?</p>
                            <a href="https://wa.me/919991121929" className="btn btn-secondary" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', marginTop: '0.5rem' }}>
                                💬 WhatsApp Us
                            </a>
                        </div>

                    </motion.div>

                    {/* Booking Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {submitted ? (
                            <div className="booking-success card">
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📅</div>
                                <h3>Meeting Booked!</h3>
                                <p>We've confirmed your call on <strong>{form.preferredDate}</strong> at <strong>{form.preferredTime}</strong>. A confirmation has been sent to <strong>{form.email}</strong>.</p>
                                <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>We'll send a Google Meet link 30 minutes before the call.</p>
                                <button className="btn btn-secondary" style={{ marginTop: '1.5rem' }} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', businessName: '', preferredDate: '', preferredTime: '', message: '' }); }}>
                                    Book Another Slot
                                </button>
                            </div>
                        ) : (
                            <form className="booking-form card" onSubmit={handleSubmit}>
                                <div className="booking-form-grid">
                                    <div className="form-group">
                                        <label className="form-label"><User size={14} /> Your Name *</label>
                                        <input className="form-input" placeholder="Full name" value={form.name} onChange={e => update('name', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label"><Building2 size={14} /> Business Name</label>
                                        <input className="form-input" placeholder="Your business name" value={form.businessName} onChange={e => update('businessName', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label"><Mail size={14} /> Email *</label>
                                        <input className="form-input" type="email" placeholder="your@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label"><Phone size={14} /> Phone *</label>
                                        <input className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => update('phone', e.target.value)} />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label"><Calendar size={14} /> Preferred Date *</label>
                                        <input className="form-input" type="date" min={minDateStr} value={form.preferredDate} onChange={e => update('preferredDate', e.target.value)} />
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                                    <label className="form-label"><Clock size={14} /> Preferred Time *</label>
                                    <div className="time-slots">
                                        {TIMES.map(t => (
                                            <button
                                                key={t}
                                                type="button"
                                                className={`time-slot ${form.preferredTime === t ? 'selected' : ''}`}
                                                onClick={() => update('preferredTime', t)}
                                            >{t}</button>
                                        ))}
                                    </div>
                                </div>

                                <div className="form-group" style={{ marginTop: '1.5rem' }}>
                                    <label className="form-label">Anything you'd like us to know? (optional)</label>
                                    <textarea className="form-textarea form-input" placeholder="Brief description of your business and what website you need..." value={form.message} onChange={e => update('message', e.target.value)} />
                                </div>

                                <button type="submit" className="btn btn-gold" disabled={loading} style={{ width: '100%', justifyContent: 'center', marginTop: '1.5rem', padding: '1rem' }}>
                                    {loading ? 'Booking...' : '📅 Book My Free Call'}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BookMeeting;
