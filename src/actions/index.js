const booksLoaded = (payload) => {
  return {
    type: 'BOOKS_LOADED',
    payload
  }
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
};

export {
  booksLoaded,
  booksRequested
};
