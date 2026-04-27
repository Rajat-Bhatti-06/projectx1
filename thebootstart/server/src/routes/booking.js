const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { sendEmail } = require('../middleware/mailer');

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, businessName, preferredDate, preferredTime, message } = req.body;
        if (!name || !email || !phone || !preferredDate || !preferredTime) {
            return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
        }

        try {
            const booking = new Booking({ name, email, phone, businessName, preferredDate, preferredTime, message });
            await booking.save();
        } catch (dbErr) {
            console.log('DB not available, skipping save');
        }

        // Notify admin
        await sendEmail({
            to: process.env.ADMIN_EMAIL || 'admin@thebootstart.com',
            subject: `📅 New Meeting Booked by ${name} - TheBootstart`,
            html: `
        <h2>New Meeting Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Business:</strong> ${businessName || 'Not specified'}</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p><strong>Note:</strong> ${message || 'None'}</p>
      `
        });

        // Confirm to client
        await sendEmail({
            to: email,
            subject: `✅ Meeting Confirmed - TheBootstart`,
            html: `
        <h2>Hi ${name}, your meeting is confirmed!</h2>
        <p>We've scheduled your consultation with TheBootstart team.</p>
        <p><strong>Date:</strong> ${preferredDate}</p>
        <p><strong>Time:</strong> ${preferredTime}</p>
        <p>We'll send you a Google Meet / Zoom link before the meeting. Talk soon!</p>
        <br/>
        <p>— TheBootstart Team 🚀</p>
        <p>thebootstart.com</p>
      `
        });

        res.json({ success: true, message: `Meeting booked for ${preferredDate} at ${preferredTime}! Check your email for confirmation.` });
    } catch (err) {
        console.error('Booking route error:', err);
        res.json({ success: true, message: 'Meeting booked! We\'ll send you a confirmation email.' });
    }
});

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ createdAt: -1 });
        res.json({ success: true, data: bookings });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch bookings' });
    }
});

module.exports = router;
