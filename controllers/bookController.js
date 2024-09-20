const Book = require('../models/Book');
const BookEntry = require('../models/BookEntry');
const BookHistory = require('../models/BookHistory');

// Add a new book
exports.addBook = async (req, res) => {
    const { book_name, author, edition, publisher } = req.body;

    try {
        const newBook = await Book.create({
            book_name,
            author,
            edition,
            publisher,
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update book details
exports.updateBook = async (req, res) => {
    const { book_id } = req.params;
    const { book_name, author, edition, publisher, availability } = req.body;

    try {
        const book = await Book.findByPk(book_id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        book.book_name = book_name || book.book_name;
        book.author = author || book.author;
        book.edition = edition || book.edition;
        book.publisher = publisher || book.publisher;
        book.availability = availability || book.availability;

        await book.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Borrow a book
exports.borrowBook = async (req, res) => {
    const { book_id, user_id, entry_date, due_date } = req.body;

    try {
        const book = await Book.findByPk(book_id);
        if (!book || !book.availability) {
            return res.status(404).json({ message: 'Book not available' });
        }

        const bookEntry = await BookEntry.create({
            book_id,
            user_id,
            entry_date,
            due_date,
        });

        book.availability = false;
        await book.save();

        res.json(bookEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Return a book
exports.returnBook = async (req, res) => {
    const { book_id, user_id } = req.body;

    try {
        const bookEntry = await BookEntry.findOne({
            where: { book_id, user_id, returned: false },
        });

        if (!bookEntry) {
            return res.status(404).json({ message: 'No active entry found' });
        }

        bookEntry.returned = true;
        await bookEntry.save();

        const book = await Book.findByPk(book_id);
        book.availability = true;
        await book.save();

        res.json(bookEntry);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
