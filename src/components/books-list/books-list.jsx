import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookStoreService from '../hoc/withBookstoreService';
import {booksLoaded} from '../../actions';

import BooksListItem from './books-list-item';

const BooksList = ({books, bookstoreService, booksLoaded}) => {
  useEffect(() => {
    const books = bookstoreService.getBooks();
    booksLoaded(books);
  }, []);

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

const mapStateToProps = ({books}) => ({books});
const mapDispatchToProps = {booksLoaded};

export default withBookStoreService()(connect(mapStateToProps, mapDispatchToProps)(BooksList));
