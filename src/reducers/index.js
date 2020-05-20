const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 400
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_BOOK_SUCCESS':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOK_REQUEST':
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOK_FAILURE':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };

    case 'BOOK_ADDED_TO_CART':
      const bookId = action.payload;
      const updatedCart = [...state.cartItems];
      const bookInCart = updatedCart.find(book => book.id === bookId);

      if (bookInCart) {
        bookInCart.amount++;

        return {
          ...state,
          cartItems: [...updatedCart]
        }
      }

      const book = state.books.find(book => book.id === bookId);
      const newItem = {
        id: book.id,
        title: book.title,
        amount: 1,
        price: book.price,

        get totalPrice() {
          return this.price * this.amount;
        }
      };

      return {
        ...state,
        cartItems: [...state.cartItems, newItem]
      }

    case 'BOOK_AMOUNT_INCREASE':
      return {};

    default:
      return state;
  }

  return state;
};

export default reducer;
