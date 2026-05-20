const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Email must be unique
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['user', 'admin'], // Can only be 'user' or 'admin'
    default: 'user' 
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);