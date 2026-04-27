const mongoose = require('mongoose');

const customRequestSchema = new mongoose.Schema({
    // Step 1 - Business Info
    businessName: { type: String, required: true, trim: true },
    businessType: { type: String, required: true },
    ownerName: { type: String, required: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true },
    // Step 2 - Features
    features: [{ type: String }],
    pages: { type: Number, default: 1 },
    // Step 3 - Budget & Description
    budget: { type: String },
    description: { type: String },
    timeline: { type: String },
    hasLogo: { type: Boolean, default: false },
    hasDomain: { type: Boolean, default: false },
    // Meta
    status: { type: String, enum: ['new', 'in-review', 'quoted', 'accepted', 'rejected'], default: 'new' }
}, { timestamps: true });

module.exports = mongoose.model('CustomRequest', customRequestSchema);
