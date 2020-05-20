import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import withBookStoreService from '../hoc/withBookstoreService';
import {fetchBooks, bookAddedToCart} from '../../actions';

import Loader from '../loader';
import ErrorIndicator from '../error-indicator';
import BooksList from './books-list';

import {compose} from '../../utils';

const BooksListContainer = (props) => {
  const {
    books,
    loading,
    error,
    fetchBooks,
    onAddedToCart
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

  return <BooksList books={books} onAddedToCart={onAddedToCart}/>
};

const mapStateToProps = ({books, loading, error, onAddedToCart}) => ({books, loading, error, onAddedToCart});

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  }
};

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
