import React, { useEffect, useState } from 'react';
import api from '../api';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await api.get('/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="books">
      <h1>Available Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.book_id}>
            {book.book_name} - {book.author} ({book.edition})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
