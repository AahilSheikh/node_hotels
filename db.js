const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});





const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB server');
    
})

db.on('error', (err) => {
    console.error('MongoDB connection error:',err);
    
})

db.on('disconnected', () => {
    console.log(' MongoDB disconnected');
    
})

module.exports = db;
