import React, { useState, useEffect } from 'react';

const BookList = ({ query }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [query]); 

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.volumeInfo.title}</h2>
          <p>{book.volumeInfo.authors?.join(', ') || 'No Author Info'}</p>
          <p>{book.volumeInfo.publisher || 'No Publisher Info'}</p>
        </li>
      ))}
    </ul>
  );
};

export default BookList;