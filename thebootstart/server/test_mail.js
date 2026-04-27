require('dotenv').config();
const nodemailer = require('nodemailer');

const testMail = async () => {
    console.log('Testing mailer with:');
    console.log('User:', process.env.EMAIL_USER);
    console.log('Target:', process.env.ADMIN_EMAIL);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    try {
        await transporter.verify();
        console.log('✅ Connection Success: Credentials are valid.');

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'Mailer Test',
            text: 'If you see this, the mailer is working!'
        });
        console.log('✅ Email Sent successfully.');
    } catch (err) {
        console.error('❌ Mailer Error:', err.message);
        if (err.message.includes('Invalid login')) {
            console.log('💡 TIP: The App Password might be incorrect or expired.');
        }
    }
};

testMail();
