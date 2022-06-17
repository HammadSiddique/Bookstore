// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';

// Reducer

const booksList = [{
  title: 'Dune',
  author: 'Frank Herbert',
  id: 1,
}, {
  title: 'Dexter',
  author: 'Jeff Lindsay',
  id: 2,
},
];

export default function booksReducer(state = booksList, action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DEL_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
}

// Action creators
export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function delBook(bookID) {
  return {
    type: DEL_BOOK,
    payload: bookID,
  };
}
