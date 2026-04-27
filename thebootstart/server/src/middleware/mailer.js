const nodemailer = require('nodemailer');

const createTransporter = () => {
    if (!process.env.EMAIL_USER || process.env.EMAIL_USER === 'your_gmail@gmail.com') {
        return null; // Email not configured
    }
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
};

const sendEmail = async ({ to, subject, html }) => {
    const transporter = createTransporter();
    if (!transporter) {
        console.log(`[Email Skipped] Transporter not ready for: ${to}`);
        return Promise.resolve();
    }

    console.log(`[Email] Attempting to send to: ${to}...`);
    try {
        const info = await transporter.sendMail({
            from: `"TheBootstart" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        });
        console.log(`[Email Success] Message sent: ${info.messageId}`);
        return info;
    } catch (error) {
        console.error(`[Email Error] Failed to send to ${to}:`, error.message);
        throw error;
    }
};

module.exports = { sendEmail };
