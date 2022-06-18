import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const InputBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  const formSubmit = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(addBook({
        item_id: books.length + 1,
        title,
        author,
        category,
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="form-container">
      <h3 className="form-heading">Add new book</h3>
      <form onSubmit={formSubmit}>
        <input
          className="input-title"
          name="title"
          type="text"
          placeholder="Book Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="input-author"
          name="author"
          type="text"
          placeholder="Author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          className="input-category"
          name="category"
          type="text"
          placeholder="Cateogry"
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default InputBook;
