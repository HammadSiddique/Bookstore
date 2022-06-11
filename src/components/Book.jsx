import React from "react";

const Book = (props) => {
    const {books} = props;
    return (
        <div className="book-display">
            <ul className="book-info">
                <li><p>{books.category}</p></li>
                <li><p>{books.title}</p></li>
                <li><p>{books.author}</p></li>
            </ul>
            <ul>
                <li><button type="button">Comments</button></li>
                <li><button type="button">Remove</button></li>
                <li><button type="button">Edit</button></li>
            </ul>
        </div>
    )
}

export default Book;