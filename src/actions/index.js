const booksLoaded = (payload) => {
  return {
    type: 'BOOKS_LOADED',
    payload
  }
};

export {
  booksLoaded
};
