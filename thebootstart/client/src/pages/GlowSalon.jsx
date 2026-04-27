import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, PerspectiveCamera, OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../config';
import {
    ArrowLeft, Scissors, Clock, Sparkles, User,
    Calendar, CheckCircle2, ChevronRight, Zap, Star,
    Heart, Smile, PartyPopper, Camera
} from 'lucide-react';
import './GlowSalon.css';

/* ── 3D TOY SALON TOOLS ── */
const ToyScissors = ({ position = [0, 0, 0], scale = 1 }) => {
    const group = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.z = Math.sin(t * 2) * 0.3;
        group.current.position.y += Math.sin(t * 1.5) * 0.005;
    });

    return (
        <group ref={group} position={position} scale={scale}>
            {/* Soft rounded blades */}
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, 0.2]}>
                <capsuleGeometry args={[0.1, 1.2, 8, 16]} />
                <MeshTransmissionMaterial thickness={0.5} roughness={0} transmission={1} color="#FFF" />
            </mesh>
            <mesh position={[0, 0.5, 0]} rotation={[0, 0, -0.2]}>
                <capsuleGeometry args={[0.1, 1.2, 8, 16]} />
                <MeshTransmissionMaterial thickness={0.5} roughness={0} transmission={1} color="#FFF" />
            </mesh>
            {/* Colorful handles */}
            <mesh position={[0.3, -0.4, 0]}>
                <torusGeometry args={[0.25, 0.08, 16, 32]} />
                <meshStandardMaterial color="#8B5CF6" />
            </mesh>
            <mesh position={[-0.3, -0.4, 0]}>
                <torusGeometry args={[0.25, 0.08, 16, 32]} />
                <meshStandardMaterial color="#F43F5E" />
            </mesh>
        </group>
    );
};

const ToyComb = ({ position = [0, 0, 0], scale = 1 }) => {
    const group = useRef();
    useFrame((state) => {
        group.current.rotation.y += 0.02;
    });

    return (
        <group ref={group} position={position} scale={scale}>
            <mesh>
                <boxGeometry args={[1.6, 0.4, 0.1]} />
                <meshStandardMaterial color="#FEF3C7" roughness={0.1} />
            </mesh>
            {Array.from({ length: 12 }).map((_, i) => (
                <mesh key={i} position={[(i * 0.12) - 0.65, -0.3, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 0.6, 8]} />
                    <meshStandardMaterial color="#FEF3C7" />
                </mesh>
            ))}
        </group>
    );
};

const FunSalonScene = () => {
    return (
        <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <ToyScissors position={[0, 0.5, 0]} scale={1.8} />
                <ToyComb position={[0, -1.8, 1]} scale={1} />
                <mesh position={[2, 1, -1]}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <MeshTransmissionMaterial thickness={0.5} transmission={1} color="#D1FAE5" />
                </mesh>
            </Float>
        </>
    );
};

const GlowSalon = () => {
    const navigate = useNavigate();
    const [activeTime, setActiveTime] = useState('11:00 AM');
    const [bookingData, setBookingData] = useState({ name: '', email: '' });
    const [bookingStatus, setBookingStatus] = useState(null);

    const times = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: { type: 'spring', stiffness: 100, damping: 15 }
        }
    };

    const hoverScale = {
        y: -10,
        boxShadow: "15px 15px 0 rgba(30, 27, 75, 0.15)",
        transition: { type: 'spring', stiffness: 400, damping: 10 }
    };

    const handleBooking = async () => {
        if (!bookingData.name || !bookingData.email) {
            alert('Please enter your name and email to glow! ✨');
            return;
        }

        setBookingStatus('loading');
        try {
            const response = await axios.post(`${API_BASE_URL}/booking`, {
                name: bookingData.name,
                email: bookingData.email,
                phone: '000-000-0000',
                businessName: 'Glow Salon Demo',
                preferredDate: new Date().toLocaleDateString(),
                preferredTime: activeTime,
                message: 'Booked via Glow Salon Case Study Page'
            });

            if (response.data.success) {
                setBookingStatus('success');
            } else {
                setBookingStatus('error');
            }
        } catch (err) {
            console.error('Booking error:', err);
            setBookingStatus('error');
        }
    };

    return (
        <div className="glow-page-v5">
            <div className="glow-pattern-bg"></div>

            <nav className="glow-nav-v5">
                <button onClick={() => navigate('/')} className="glow-back-v5">
                    <ArrowLeft size={18} /> BACK
                </button>
                <div className="glow-logo-v5">GLOW PARTY STUDIO ✨</div>
                <div style={{ display: 'flex', gap: '1rem' }} className="nav-icons-v5">
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }}><Heart size={24} color="#F43F5E" fill="#F43F5E" /></motion.div>
                    <motion.div whileHover={{ scale: 1.2, rotate: -10 }}><Smile size={24} color="#FBBF24" /></motion.div>
                </div>
            </nav>

            <motion.main
                className="glow-playground"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Hero Bubble */}
                <motion.div className="glow-bubble-card hero-bubble" variants={itemVariants} whileHover={hoverScale}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                        <motion.span
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            style={{ padding: '0.5rem 1rem', background: 'white', borderRadius: '50px', fontWeight: 800, border: '3px solid #1E1B4B' }}
                        >
                            YAY! BEAUTY TIME
                        </motion.span>
                    </div>
                    <h1 className="glow-hero-title-v5">Get the <span>Glow</span> <br /> No Wait.</h1>
                    <p className="glow-hero-sub-v5">The funnest salon in town! Book your time online, skip the boring wait, and jump straight into the style chair.</p>
                    <div style={{ marginTop: '2rem' }}>
                        <motion.button className="book-btn-v5" style={{ padding: '1.5rem 3rem', fontSize: '1.5rem' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>LETS GLOW! 🚀</motion.button>
                    </div>
                    <motion.div className="floating-emoji" animate={{ y: [0, -20, 0], rotate: [15, 20, 15] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ top: '20px', right: '30px' }}>✂️</motion.div>
                    <motion.div className="floating-emoji" animate={{ y: [0, 20, 0], rotate: [-20, -15, -20] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ bottom: '40px', right: '120px' }}>💅</motion.div>
                </motion.div>

                {/* Booking Bubble */}
                <motion.div className="glow-bubble-card booking-bubble" variants={itemVariants} whileHover={hoverScale}>
                    <h2 className="booking-title-v5"><Calendar size={32} /> Pick Your Time</h2>
                    <div className="time-pill-grid">
                        {times.map((t, idx) => (
                            <motion.div
                                key={t}
                                className={`time-pill ${activeTime === t ? 'active' : ''}`}
                                onClick={() => setActiveTime(t)}
                                whileHover={{ scale: 1.05, backgroundColor: "#FEF3C7" }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (idx * 0.05) }}
                            >
                                {t}
                            </motion.div>
                        ))}
                    </div>

                    <div className="booking-inputs-v5" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="glow-input-v5"
                            value={bookingData.name}
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                            style={{ padding: '0.8rem 1.2rem', borderRadius: '20px', border: '3px solid #1E1B4B', fontWeight: 700, outline: 'none' }}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="glow-input-v5"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            style={{ padding: '0.8rem 1.2rem', borderRadius: '20px', border: '3px solid #1E1B4B', fontWeight: 700, outline: 'none' }}
                        />
                    </div>

                    <motion.div
                        style={{ marginTop: '1.5rem', textAlign: 'center', background: 'white', padding: '1.5rem', borderRadius: '30px', border: '3px dashed #8B5CF6' }}
                        animate={{ borderColor: ["#8B5CF6", "#F43F5E", "#34D399", "#8B5CF6"] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    >
                        {bookingStatus === 'success' ? (
                            <div className="success-msg-v5">
                                <CheckCircle2 size={40} color="#34D399" style={{ marginBottom: '0.5rem' }} />
                                <p style={{ margin: 0, fontWeight: 900, color: '#34D399' }}>YAY! YOU'RE IN! 🎉</p>
                                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Check your email for the magic link.</p>
                            </div>
                        ) : (
                            <>
                                <p style={{ margin: 0, fontWeight: 700, fontSize: '0.9rem', color: '#8B5CF6' }}>YOU'RE BOOKING FOR</p>
                                <p style={{ margin: '0.5rem 0 0', fontWeight: 900, fontSize: '1.8rem' }}>{activeTime}</p>
                                <motion.button
                                    className="book-btn-v5"
                                    style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleBooking}
                                    disabled={bookingStatus === 'loading'}
                                >
                                    {bookingStatus === 'loading' ? 'SENDING...' : 'CONFIRM BOOKING'}
                                </motion.button>
                            </>
                        )}
                    </motion.div>
                </motion.div>

                {/* 3D Fun Zone */}
                <motion.div className="glow-bubble-card visual-bubble" variants={itemVariants} whileHover={hoverScale}>
                    <div className="canvas-wrap-v5">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                            <ambientLight intensity={0.7} />
                            <pointLight position={[10, 10, 10]} intensity={1.5} color="#F43F5E" />
                            <Suspense fallback={null}>
                                <FunSalonScene />
                                <Environment preset="sunset" />
                            </Suspense>
                            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
                            <ContactShadows position={[0, -3, 0]} opacity={0.3} blur={3} far={4} />
                        </Canvas>
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div className="glow-bubble-card stat-bubble bubble-yellow" variants={itemVariants} whileHover={hoverScale}>
                    <motion.div className="stat-icon-v5" animate={{ rotate: [0, 360] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}><Clock size={24} /></motion.div>
                    <div className="stat-text-v5">
                        <span className="stat-val-v5">0 MIN</span>
                        <span className="stat-label-v5">WAITING TIME</span>
                    </div>
                </motion.div>

                <motion.div className="glow-bubble-card stat-bubble bubble-mint" variants={itemVariants} whileHover={hoverScale}>
                    <motion.div className="stat-icon-v5" style={{ background: '#8B5CF6', color: 'white' }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}><PartyPopper size={24} /></motion.div>
                    <div className="stat-text-v5">
                        <span className="stat-val-v5">5,000+</span>
                        <span className="stat-label-v5">HAPPY LOOKS</span>
                    </div>
                </motion.div>

                {/* Services */}
                <div className="section-tag-v5">COOL STYLES</div>
                {[
                    { title: 'Cool Fade', icon: <Zap size={40} />, color: '#D1FAE5', price: '₹499', label: 'FOR BOYS' },
                    { title: 'Princess Cut', icon: <Star size={40} />, color: '#FCE7F3', price: '₹799', label: 'FOR GIRLS' },
                    { title: 'Style Shot', icon: <Camera size={40} />, color: '#FEF3C7', price: '₹299', label: 'FOR EVERYONE' }
                ].map((s, i) => (
                    <motion.div
                        key={s.title}
                        className="glow-bubble-card service-bubble"
                        style={{ background: s.color }}
                        variants={itemVariants}
                        whileHover={hoverScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div className="stat-icon-v5">{s.icon}</div>
                            <span style={{ fontWeight: 900, color: '#8B5CF6' }}>{s.label}</span>
                        </div>
                        <h3 className="service-title-v5">{s.title}</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 900 }}>{s.price}</span>
                            <motion.button className="book-btn-v5" style={{ padding: '0.8rem 1.5rem' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>BOOK</motion.button>
                        </div>
                    </motion.div>
                ))}

                {/* Stylists */}
                <div className="section-tag-v5">PICK YOUR STYLIST</div>
                <div className="stylist-grid">
                    {[
                        { name: 'Alex', role: 'Fade Master', emoji: '🧔‍♂️' },
                        { name: 'Maya', role: 'Color Guru', emoji: '👩‍🎨' },
                        { name: 'Leo', role: 'Scissor Artist', emoji: '✂️' },
                        { name: 'Zoe', role: 'Braid Queen', emoji: '👸' }
                    ].map((st, i) => (
                        <motion.div key={st.name} className="stylist-card" variants={itemVariants} whileHover={{ scale: 1.05 }}>
                            <div className="stylist-avatar">{st.emoji}</div>
                            <h4 className="stylist-name">{st.name}</h4>
                            <p className="stylist-role">{st.role}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Gallery */}
                <div className="section-tag-v5">TRENDING LOOKS</div>
                <div className="gallery-bento">
                    {[
                        { label: 'The Wolf Cut', color: '#FCE7F3', emoji: '🐺' },
                        { label: 'Neon Buzz', color: '#D1FAE5', emoji: '⚡' },
                        { label: 'Silk Shag', color: '#EDE9FE', emoji: '✨' },
                        { label: 'Midnight Fade', color: '#FEF3C7', emoji: '🌑' }
                    ].map((g, i) => (
                        <motion.div
                            key={g.label}
                            className="gallery-item"
                            style={{ background: g.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}
                            variants={itemVariants}
                            whileHover={{ scale: 0.98, rotate: i % 2 === 0 ? 2 : -2 }}
                        >
                            <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 + (i * 0.1) }}>{g.emoji}</motion.div>
                            <div className="gallery-overlay" style={{ opacity: 1, background: 'transparent' }}>
                                <span className="gallery-label">{g.label}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Process */}
                <div className="section-tag-v5">THE GLOW PROCESS</div>
                <div className="process-bubbles">
                    {[
                        { step: '01', title: 'Consult', desc: 'We talk about your vision over a cool drink.' },
                        { step: '02', title: 'The Wash', desc: 'Premium products to prep your hair.' },
                        { step: '03', title: 'The Vision', desc: 'The major transformation begins.' },
                        { step: '04', title: 'The Glow', desc: 'Final styling and post-cut photoshoot.' }
                    ].map((p, i) => (
                        <motion.div key={p.step} className="process-step" variants={itemVariants}>
                            <div className="step-circle">{p.step}</div>
                            <h4 className="step-title">{p.title}</h4>
                            <p className="step-desc">{p.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.main>

            <footer className="glow-party-cta">
                <motion.div initial={{ scale: 0.95, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
                    <h2 style={{ fontSize: '3rem', fontFamily: 'var(--font-heading)', fontWeight: 900, marginBottom: '2rem' }}>Don't Wait, Just Party! 🎉</h2>
                    <motion.button
                        className="glow-party-btn"
                        onClick={() => navigate('/')}
                        whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
                        transition={{ rotate: { repeat: Infinity, duration: 0.2 } }}
                    >
                        LETS BOOK NOW
                    </motion.button>
                    <div style={{ marginTop: '4rem', opacity: 0.6, fontWeight: 700, fontSize: '0.9rem' }}>MADE WITH ❤️ BY THEBOOTSTART</div>
                </motion.div>
            </footer>
        </div>
    );
};

export default GlowSalon;
