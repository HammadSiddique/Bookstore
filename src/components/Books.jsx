import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="main-container">
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <InputBook />
    </div>
  );
};

export default Books;
