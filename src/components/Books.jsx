import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import InputBook from './InputBook';
import { displayBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  dispatch(displayBooks());
  const books = useSelector((state) => state.books);
  return (
    <div className="main-container">
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <InputBook />
    </div>
  );
};

export default Books;
