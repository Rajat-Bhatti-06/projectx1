import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import MithaiPalace from './pages/MithaiPalace';
import FreshSqueeze from './pages/FreshSqueeze';
import GlowSalon from './pages/GlowSalon';
import TuckShop from './pages/TuckShop';
import './index.css';

function App() {
  return (
    <Router>
      <Toaster position="top-right" toastOptions={{
        style: { background: '#1a1a2e', color: '#fff', border: '1px solid #7c3aed' }
      }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-study/mithai-palace" element={<MithaiPalace />} />
        <Route path="/case-study/fresh-squeeze" element={<FreshSqueeze />} />
        <Route path="/case-study/glow-salon" element={<GlowSalon />} />
        <Route path="/case-study/tuck-shop" element={<TuckShop />} />
      </Routes>
    </Router>
  );
}

export default App;
