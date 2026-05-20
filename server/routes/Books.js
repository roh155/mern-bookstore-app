// File: server/routes/books.js
const router = require('express').Router();
const Book = require('../models/Book');

// 1. GET ALL BOOKS (For the Home Page)
router.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. ADD A BOOK (For Admin)
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        category: req.body.category,
        description: req.body.description,
        image: req.body.image,
        stock: req.body.stock
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;