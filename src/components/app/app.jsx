import React from 'react';

import withBookStoreService from '../hoc/withBookstoreService';

const App = ({bookstoreService}) => {
  console.log(bookstoreService.getBooks())
  return (
    <div>App</div>
  );
};

export default withBookStoreService()(App);
