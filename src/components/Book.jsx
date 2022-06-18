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
    <div className="book-card">
      <div className="book-detail">
        <ul className="book-info" key={id}>
          <li>
            <h4 className="category">{category}</h4>
          </li>
          <li>
            <h2 className="title">{title}</h2>
          </li>
          <li>
            <h3 className="author">{author}</h3>
          </li>
        </ul>
        <ul className="book-btns">
          <li>
            <button className="cmnt-btn" type="button">Comments</button>
          </li>
          <li>
            <button className="remove-btn" type="button" onClick={() => deleteBook(id)}>Remove</button>
          </li>
          <li>
            <button className="edit-btn" type="button">Edit</button>
          </li>
        </ul>
      </div>
      <div className="book-percent">
        <div className="circle-wrap">
          <div className="circle">
            <div className="mask half">
              <div className="fill">
                <div className="inside-circle" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="percentage">50%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="book-progress">
        <p>Current chapter</p>
        <h5>Chapter 8</h5>
        <button type="button">Update Progress</button>
      </div>
    </div>
  );
};

export default Book;
