import React from 'react';

import {BookstoreServiceConsumer} from '../../bookstore-service-context';

const withBookStoreService = (Wrapped) => {
  return (props) => {
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          return (
            <Wrapped {...props} {...bookstoreService}/>
          );
        }
      }
    </BookstoreServiceConsumer>
  }
};

export default withBookStoreService;
