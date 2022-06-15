import React from 'react';

const InputBook = () => (
  <div className="form-container">
    <h3 className="form-heading">Add a new book</h3>
    <form>
      <input
        className="title"
        name="title"
        type="text"
        placeholder="Book Title"
        required
      />
      <input
        className="author"
        name="author"
        type="text"
        placeholder="Author"
        required
      />
      <button type="button" className="add-btn">Add Book</button>
    </form>
  </div>
);

export default InputBook;
