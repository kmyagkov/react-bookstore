import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookStoreService from '../hoc/withBookstoreService';
import {booksLoaded} from '../../actions';

import Loader from '../loader';
import BooksListItem from './books-list-item';

import {compose} from '../../utils';

const BooksList = ({books, bookstoreService, booksLoaded, loading}) => {
  useEffect(() => {
    bookstoreService.getBooks()
      .then(books => booksLoaded(books));
  }, []);

  if (loading) {
    return <Loader/>
  }

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

const mapStateToProps = ({books, loading}) => ({books, loading});
const mapDispatchToProps = {booksLoaded};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
