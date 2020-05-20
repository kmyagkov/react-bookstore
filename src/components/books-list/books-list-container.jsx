import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookStoreService from '../hoc/withBookstoreService';
import {fetchBooks} from '../../actions';

import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import BooksList from './books-list';

import {compose} from '../../utils';

const BooksListContainer = (props) => {
  const {
    books,
    loading,
    error,
    fetchBooks
  } = props;

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <ErrorIndicator/>;
  }

  return <BooksList books={books}/>
};

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
