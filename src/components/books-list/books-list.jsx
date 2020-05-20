import React from 'react';

import BooksListItem from './books-list-item';

const BooksList = ({books, onAddedToCart}) => {
  return (
    <ul className="list-group">
      {
        books.map((book) => {
          return (
            <BooksListItem
              book={book}
              onAddedToCart={() => {onAddedToCart(book.id)}}
              key={book.id}
            />
          )
        })
      }
    </ul>
  );
};

export default BooksList;
