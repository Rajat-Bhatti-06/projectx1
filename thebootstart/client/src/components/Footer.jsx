import { Zap, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);

const TwitterIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
);

const GmailIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path></svg>
);

const LinkedinIcon = ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const Footer = () => {
    const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer id="contact" className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <div className="footer-logo-icon"><Zap size={20} fill="currentColor" /></div>
                                <span>The<span className="logo-accent">Bootstart</span></span>
                            </div>
                            <p className="footer-desc">
                                We build stunning, affordable websites for small businesses across India.
                                Your business deserves to be online.
                            </p>
                            <div className="footer-socials">
                                <a href="https://wa.me/919991121929" target="_blank" rel="noreferrer" className="social-link">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                                </a>
                                <a href="https://www.instagram.com/theb00tstart/" target="_blank" rel="noreferrer" className="social-link"><InstagramIcon /></a>
                                <a href="mailto:bootstartagency@gmail.com" target="_blank" rel="noreferrer" className="social-link"><GmailIcon /></a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="footer-col">
                            <h4>Services</h4>
                            <ul>
                                <li><button onClick={() => scrollTo('#services')}>Starter Websites</button></li>
                                <li><button onClick={() => scrollTo('#services')}>Business Websites</button></li>
                                <li><button onClick={() => scrollTo('#services')}>E-commerce Stores</button></li>
                                <li><button onClick={() => scrollTo('#services')}>Custom Web Apps</button></li>
                                <li><button onClick={() => scrollTo('#services')}>Domain Registration</button></li>
                            </ul>
                        </div>

                        {/* Industries */}
                        <div className="footer-col">
                            <h4>Industries</h4>
                            <ul>
                                <li><button onClick={() => scrollTo('#templates')}>Sweet Shops</button></li>
                                <li><button onClick={() => scrollTo('#templates')}>Restaurants</button></li>
                                <li><button onClick={() => scrollTo('#templates')}>Beauty Salons</button></li>
                                <li><button onClick={() => scrollTo('#templates')}>Medical Clinics</button></li>
                                <li><button onClick={() => scrollTo('#templates')}>Coaching Centers</button></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-col">
                            <h4>Contact Us</h4>
                            <div className="footer-contact-list">
                                <a href="mailto:bootstartagency@gmail.com" className="footer-contact-item">
                                    <Mail size={16} />
                                    <span>bootstartagency@gmail.com</span>
                                </a>
                                <a href="https://wa.me/919991121929" className="footer-contact-item" target="_blank" rel="noreferrer">
                                    <Phone size={16} />
                                    <span>+91 9991121929</span>
                                </a>
                                <div className="footer-contact-item">
                                    <MapPin size={16} />
                                    <span>India (Remote – serving all cities)</span>
                                </div>
                            </div>
                            <button className="btn btn-primary footer-cta" onClick={() => scrollTo('#booking')}>
                                Book Free Call →
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <p>© 2024 TheBootstart. All rights reserved. | <a href="https://thebootstart.com">thebootstart.com</a></p>
                        <div className="footer-badges">
                            <span>🔒 Secure Payments</span>
                            <span>✅ 100% Satisfaction Guarantee</span>
                            <span>⚡ Fast Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
