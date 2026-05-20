const express = require('express');
const router = express.Router();
const { getBooks } = require('../controllers/bookController');

// This matches GET requests to the root of this route file
router.get('/', getBooks); 

module.exports = router;