import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import ServicePackages from '../components/ServicePackages';
import BookMeeting from '../components/BookMeeting';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="page-wrapper">
            <Navbar />
            <Hero />
            <Portfolio />
            <ServicePackages />
            <BookMeeting />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
