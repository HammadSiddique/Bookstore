import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const formSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({
        title,
        author,
        id: books.length + 1,
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-heading">Add a new book</h3>
      <form onSubmit={formSubmit}>
        <input
          className="title"
          name="title"
          type="text"
          placeholder="Book Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="author"
          name="author"
          type="text"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default InputBook;
