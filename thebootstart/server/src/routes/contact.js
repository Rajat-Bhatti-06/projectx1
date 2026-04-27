const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const { sendEmail } = require('../middleware/mailer');

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Name, email and message are required.' });
        }

        // Save to DB if connected
        try {
            const contact = new Contact({ name, email, phone, message });
            await contact.save();
        } catch (dbErr) {
            console.log('DB not available, skipping save');
        }

        // Send notification email
        await sendEmail({
            to: process.env.ADMIN_EMAIL || 'admin@thebootstart.com',
            subject: `📩 New Contact from ${name} - TheBootstart`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
        });

        res.json({ success: true, message: 'Message received! We\'ll contact you within 24 hours.' });
    } catch (err) {
        console.error('Contact route error:', err);
        res.json({ success: true, message: 'Message received! We\'ll contact you within 24 hours.' });
    }
});

module.exports = router;
