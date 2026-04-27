import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { ArrowRight, Star, Users, Globe } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const navigate = useNavigate();
    const canvasRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        camera.position.z = 30;

        // Particle system
        const count = 2500;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const colorOptions = [
            new THREE.Color('#7c3aed'),
            new THREE.Color('#a855f7'),
            new THREE.Color('#3b82f6'),
            new THREE.Color('#f59e0b'),
        ];

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 100;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 60;

            const c = colorOptions[Math.floor(Math.random() * colorOptions.length)];
            colors[i * 3] = c.r;
            colors[i * 3 + 1] = c.g;
            colors[i * 3 + 2] = c.b;
            sizes[i] = Math.random() * 2 + 0.5;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.3,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            sizeAttenuation: true,
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Floating rings
        const ringGeom1 = new THREE.TorusGeometry(12, 0.05, 16, 100);
        const ringMat1 = new THREE.MeshBasicMaterial({ color: '#7c3aed', opacity: 0.3, transparent: true });
        const ring1 = new THREE.Mesh(ringGeom1, ringMat1);
        ring1.rotation.x = Math.PI / 3;
        scene.add(ring1);

        const ringGeom2 = new THREE.TorusGeometry(18, 0.04, 16, 100);
        const ringMat2 = new THREE.MeshBasicMaterial({ color: '#3b82f6', opacity: 0.2, transparent: true });
        const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
        ring2.rotation.x = Math.PI / 4;
        ring2.rotation.y = Math.PI / 6;
        scene.add(ring2);

        // Sphere wireframe
        const sphereGeom = new THREE.SphereGeometry(8, 16, 16);
        const sphereMat = new THREE.MeshBasicMaterial({ color: '#a855f7', wireframe: true, opacity: 0.08, transparent: true });
        const sphere = new THREE.Mesh(sphereGeom, sphereMat);
        scene.add(sphere);

        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth - 0.5) * 2,
                y: (e.clientY / window.innerHeight - 0.5) * 2,
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        const handleResize = () => {
            if (!canvas) return;
            const w = canvas.clientWidth, h = canvas.clientHeight;
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
            renderer.setSize(w, h);
        };
        window.addEventListener('resize', handleResize);

        let animId;
        const clock = new THREE.Clock();
        const animate = () => {
            animId = requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            particles.rotation.y = t * 0.03;
            particles.rotation.x = t * 0.01;
            ring1.rotation.z = t * 0.05;
            ring2.rotation.z = -t * 0.03;
            sphere.rotation.y = t * 0.04;

            camera.position.x += (mouseRef.current.x * 5 - camera.position.x) * 0.03;
            camera.position.y += (-mouseRef.current.y * 3 - camera.position.y) * 0.03;
            camera.lookAt(scene.position);
            renderer.render(scene, camera);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    const scrollTo = (id) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <canvas ref={canvasRef} className="hero-canvas" />

            {/* Glow Orbs */}
            <div className="hero-orb orb-1" />
            <div className="hero-orb orb-2" />

            <div className="hero-content container">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="hero-text"
                >
                    <h1 className="hero-title">
                        We Build Websites
                        <br />
                        That <span className="gradient-text">Win Clients</span>
                        <br />
                        for Your Business
                    </h1>

                    <p className="hero-desc">
                        From sweet shops to restaurants, salons to clinics — we create stunning,
                        professional websites that attract customers and grow your business.
                        Starting from <strong>₹4,999</strong> only.
                    </p>

                    <div className="hero-actions">
                        <button className="btn btn-primary" onClick={() => scrollTo('#services')}>
                            View Our Packages
                            <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollTo('#booking')}>
                            Book Free Consultation
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-num">500+</span>
                            <span className="stat-label">Websites Built</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="hero-stat">
                            <span className="stat-num">100%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                        <div className="stat-divider" />
                        <div className="hero-stat">
                            <span className="stat-num">₹4,999+</span>
                            <span className="stat-label">Starting Price</span>
                        </div>
                    </div>

                    {/* Trust badges */}
                    <div className="hero-badges">
                        <span className="trust-badge"><Star size={14} fill="#f59e0b" color="#f59e0b" /> 4.7-Star Rated</span>
                        <span className="trust-badge"><Users size={14} /> 500+ Happy Clients</span>
                        <span className="trust-badge"><Globe size={14} /> thebootstart.com</span>
                    </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="hero-cards"
                >
                    {[
                        { emoji: '🏪', label: 'Tuck Shop', price: '₹4,999', live: true, slug: 'tuck-shop' },
                        { emoji: '🍭', label: 'Mithai Palace', price: '₹9,999', live: true, slug: 'mithai-palace' },
                        { emoji: '🌿', label: 'Fresh Squeeze Co.', price: '₹49,999', live: true, slug: 'fresh-squeeze' },
                        { emoji: '💇‍♀️', label: 'Glow Salon Studio', price: '₹99,999', live: true, slug: 'glow-salon' },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            className="floating-card"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.3 }}
                            onClick={() => {
                                navigate(`/case-study/${item.slug}`);
                                window.scrollTo(0, 0);
                            }}
                            style={{ cursor: 'pointer' }}
                        >
                            <span className="floating-card-emoji">{item.emoji}</span>
                            <div>
                                <div className="floating-card-label">{item.label}</div>
                                <div className="floating-card-price">{item.price}</div>
                            </div>
                            {item.live && <span className="live-dot" />}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="scroll-indicator"
                onClick={() => scrollTo('#portfolio')}
            >
                <div className="scroll-line" />
                <span>Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
