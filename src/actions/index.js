const booksLoaded = (payload) => {
  return {
    type: 'FETCH_BOOK_SUCCESS',
    payload
  }
};

const booksRequested = () => {
  return {
    type: 'FETCH_BOOK_REQUEST'
  }
};

const booksError = (payload) => {
  return {
    type: 'FETCH_BOOK_FAILURE',
    payload
  }
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then(books => dispatch(booksLoaded(books)))
    .catch((err) => dispatch(booksError(err)));
}

const bookAddedToCart = (payload) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload
  }
};

export {
  fetchBooks,
  bookAddedToCart
};
