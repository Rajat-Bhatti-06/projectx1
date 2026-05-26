const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ to, subject, html }) => {
    if (!process.env.RESEND_API_KEY) {
        console.log(`[Email Skipped] Resend API key not configured for: ${to}`);
        return Promise.resolve();
    }

    console.log(`[Email] Attempting to send to: ${to}...`);
    try {
        const info = await resend.emails.send({
            from: 'support@info.thebootstart.com',
            to,
            subject,
            html
        });
        console.log(`[Email Success] Message sent: ${info.id}`);
        return info;
    } catch (error) {
        console.error(`[Email Error] Failed to send to ${to}:`, error.message);
        throw error;
    }
};

module.exports = { sendEmail };
