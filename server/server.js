const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// 1. Dotenv ko load karne ke liye yeh line sabse upar jodi hai
require('dotenv').config(); 

// // Import Routes (Make sure this file exists from the previous step)
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// // Middleware (Allows your frontend to talk to the backend)
app.use(express.json());
app.use(cors());

// // --- SETTINGS ---
// 2. Ab port seedhe .env file se uthayega, agar wahan nahi mila toh 5000 use karega
const PORT = process.env.PORT || 5000;

// // YOUR DATABASE LINK (Ab .env file se safe tarike se aayega)
const MONGO_URI = process.env.MONGO_URI;

// // --- DATABASE CONNECTION ---
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.error('Error Connection Failed:', error.message);
        process.exit(1); // // Stop server if connection fails
    }
};

// // Connect to Database
connectDB();

// // --- USE ROUTES ---
// // This tells the server: "If a user goes to /api/books, use the logic in bookRoutes"
app.use('/api/books', bookRoutes);

// 3. Server ko listen mode par dalne ke liye aakhir mein yeh code zaroor chahiye hota hai
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});