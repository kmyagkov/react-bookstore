import React from 'react';

import BooksListItem from './books-list-item';

const BooksList = ({books}) => {
  return (
    <ul className="list-group">
      {
        books.map((book) => {
          return (
            <BooksListItem book={book} key={book.id}/>
          )
        })
      }
    </ul>
  );
};

export default BooksList;
