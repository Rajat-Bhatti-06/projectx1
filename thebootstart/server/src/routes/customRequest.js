const express = require('express');
const router = express.Router();
const CustomRequest = require('../models/CustomRequest');
const { sendEmail } = require('../middleware/mailer');

router.post('/', async (req, res) => {
    try {
        const { businessName, businessType, ownerName, email, phone, features, pages, budget, description, timeline, hasLogo, hasDomain } = req.body;

        if (!businessName || !businessType || !ownerName || !email || !phone) {
            return res.status(400).json({ success: false, message: 'Please fill all required fields.' });
        }

        try {
            const customReq = new CustomRequest({ businessName, businessType, ownerName, email, phone, features, pages, budget, description, timeline, hasLogo, hasDomain });
            await customReq.save();
        } catch (dbErr) {
            console.log('DB not available, skipping save');
        }

        await sendEmail({
            to: process.env.ADMIN_EMAIL || 'admin@thebootstart.com',
            subject: `🎨 Custom Website Request from ${businessName} - TheBootstart`,
            html: `
        <h2>New Custom Website Request</h2>
        <p><strong>Business:</strong> ${businessName} (${businessType})</p>
        <p><strong>Owner:</strong> ${ownerName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Features:</strong> ${features?.join(', ') || 'Not specified'}</p>
        <p><strong>Pages:</strong> ${pages}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Has Logo:</strong> ${hasLogo ? 'Yes' : 'No'}</p>
        <p><strong>Has Domain:</strong> ${hasDomain ? 'Yes' : 'No'}</p>
        <p><strong>Description:</strong> ${description}</p>
      `
        });

        await sendEmail({
            to: email,
            subject: `🎉 We received your website request! - TheBootstart`,
            html: `
        <h2>Hi ${ownerName}! We received your request 🚀</h2>
        <p>Thank you for reaching out to <strong>TheBootstart</strong>. We're excited to work on your website for <strong>${businessName}</strong>!</p>
        <p>Our team will review your requirements and get back to you with a custom quote within <strong>24 hours</strong>.</p>
        <p>In the meantime, feel free to book a free consultation call at <a href="https://thebootstart.com">thebootstart.com</a></p>
        <br/>
        <p>— TheBootstart Team 🚀</p>
      `
        });

        res.json({ success: true, message: 'Your request has been submitted! We\'ll send you a custom quote within 24 hours.' });
    } catch (err) {
        console.error('Custom request route error:', err);
        res.json({ success: true, message: 'Request received! We\'ll contact you soon.' });
    }
});

module.exports = router;
