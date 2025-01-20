const mongoose = require('mongoose');
require('dotenv').config();

// Use MongoDB URL from the .env file
const mongoURL = process.env.MONGODB_URL || 'mongodb+srv://aahil:aahil786@chat.2qv54.mongodb.net/mydatabase?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
mongoose.connect(mongoURL)
    .then(() => console.log('Connected to MongoDB Atlas server'))
    .catch(err => console.error('MongoDB Atlas connection error:', err));

const db = mongoose.connection;

// MongoDB events
db.on('connected', () => {
    console.log('MongoDB connection established');
});

db.on('error', (err) => {
    console.error('MongoDB error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = db;
