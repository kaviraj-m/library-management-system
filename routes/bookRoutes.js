const express = require('express');
const { addBook, updateBook, borrowBook, returnBook } = require('../controllers/bookController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const router = express.Router();

// Book management
router.post('/', authMiddleware, adminMiddleware, addBook);
router.put('/:book_id', authMiddleware, adminMiddleware, updateBook);

// Borrow and return books
router.post('/borrow', authMiddleware, borrowBook);
router.post('/return', authMiddleware, returnBook);

module.exports = router;
