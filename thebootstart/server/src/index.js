require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoose = require('mongoose');

const contactRoutes = require('./routes/contact');
const bookingRoutes = require('./routes/booking');
const customRequestRoutes = require('./routes/customRequest');
const adminRoutes = require('./routes/admin');

const app = express();

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: [
    process.env.CLIENT_URL,
    'http://localhost:5173',
    'http://localhost:5173/',
    'https://www.thebootstart.com/',
    'https://www.thebootstart.com'
  ].filter(Boolean),
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
  message: 'Too many requests from this IP, please try again later.'
});
app.use('/api/', limiter);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/booking', bookingRoutes);
app.use('/api/custom-request', customRequestRoutes);
app.use('/api/admin', adminRoutes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'TheBootstart API is running 🚀', status: 'ok' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

// MongoDB Connection
const startServer = async () => {
  const PORT = process.env.PORT || 5000;
  let mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/thebootstart';

  try {
    // Try connecting to the configured MongoDB
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    });
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);

    // Only attempt fallback in development
    if (process.env.NODE_ENV !== 'production') {
      console.log('🔄 Attempting to start in-memory MongoDB fallback...');
      try {
        const { MongoMemoryServer } = require('mongodb-memory-server');
        const mongod = await MongoMemoryServer.create();
        const uri = mongod.getUri();
        await mongoose.connect(uri);
        console.log('✅ In-Memory MongoDB Started & Connected');
        console.log('ℹ️  Note: Data will be lost when the server restarts.');
      } catch (fallbackErr) {
        console.error('❌ Fallback MongoDB failed:', fallbackErr.message);
        console.log('⚠️  Running without MongoDB - forms will not save data');
      }
    } else {
      console.log('⚠️  Running without MongoDB - forms will not save data');
    }
  }

  app.listen(PORT, () => {
    console.log(`🚀 TheBootstart API running on http://localhost:${PORT}`);
  });
};

startServer();

module.exports = app;
