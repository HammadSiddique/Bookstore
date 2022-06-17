/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { delBook } from '../redux/books/books';

const Book = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const deleteBook = (bookID) => {
    dispatch(delBook(bookID));
  };
  return (
    <div className="book-display">
      <ul className="book-info" key={id}>
        <li>
          <p>{category}</p>
        </li>
        <li>
          <p>{title}</p>
        </li>
        <li>
          <p>{author}</p>
        </li>
      </ul>
      <ul>
        <li>
          <button type="button">Comments</button>
        </li>
        <li>
          <button type="button" onClick={() => deleteBook(id)}>Remove</button>
        </li>
        <li>
          <button type="button">Edit</button>
        </li>
      </ul>
    </div>
  );
};

export default Book;
