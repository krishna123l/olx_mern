const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    match:[/^\d{10}$/],
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  refreshToken: {
    type: String
  },
  profilePic: {
    type: String 
  },
  cart:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);