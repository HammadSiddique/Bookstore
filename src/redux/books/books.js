const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/urKxyaHpPan7sVpD7Fa9/books';

// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const DEL_BOOK = 'bookstore/books/DEL_BOOK';
const DISPLAY_BOOK = 'bookstore/books/DISPLAY_BOOK';

// Reducer

export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case DISPLAY_BOOK:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case DEL_BOOK:
      return [...state.filter((book) => book.id !== action.payload)];
    default:
      return state;
  }
}

// Action creators
export const addBook = (book) => async (dispatch) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: ADD_BOOK, payload: book }));
};

export const displayBooks = () => async (dispatch) => {
  await fetch(url)
    .then((res) => res.json())
    .then((books) => {
      const bookList = [];
      Object.keys(books).forEach((key) => {
        bookList.push({
          item_id: key,
          author: books[key][0].author,
          title: books[key][0].title,
          category: books[key][0].category,
        });
      });
      dispatch({ type: DISPLAY_BOOK, payload: bookList });
    });
};

export const delBook = (bookID) => async (dispatch) => {
  await fetch(`${url}/${bookID}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(() => dispatch({ type: DEL_BOOK, payload: bookID }));
};
