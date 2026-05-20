const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Book', bookSchema);