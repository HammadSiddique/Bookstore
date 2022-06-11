import React from "react";
import Book from "./Book";
import InputBook from "./InputBook";

const bookslist = {
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert'
};

const Books = () => (
    <div className="main-container"> 
        <Book books={bookslist}/>
        <InputBook />
    </div>
)

export default Books;