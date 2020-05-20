const initialState = {
  books: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
      return {
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOK_REQUEST':
      return {
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOK_FAILURE':
      return {
        books: [],
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }

  return state;
};

export default reducer;
