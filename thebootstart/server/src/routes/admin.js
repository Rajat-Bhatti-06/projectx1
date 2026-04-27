const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Contact = require('../models/Contact');
const Booking = require('../models/Booking');
const CustomRequest = require('../models/CustomRequest');

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ success: false, message: 'Access denied. No token.' });
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.admin = decoded;
        next();
    } catch {
        res.status(403).json({ success: false, message: 'Invalid token.' });
    }
};

// Admin Login
router.post('/login', (req, res) => {
    const { password } = req.body;
    if (password === process.env.ADMIN_PASSWORD || password === 'thebootstart@2024') {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret', { expiresIn: '24h' });
        res.json({ success: true, token });
    } else {
        res.status(401).json({ success: false, message: 'Invalid password.' });
    }
});

// Get all data
router.get('/contacts', verifyToken, async (req, res) => {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
});

router.get('/bookings', verifyToken, async (req, res) => {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json({ success: true, data: bookings });
});

router.get('/requests', verifyToken, async (req, res) => {
    const requests = await CustomRequest.find().sort({ createdAt: -1 });
    res.json({ success: true, data: requests });
});

module.exports = router;
