import React from 'react';

import Cart from './cart';

import './app-header.css';

const AppHeader = ({extClass}) => {
  return (
    <header className={`app-header ${extClass}`}>
      <h1>Books</h1>
      <Cart/>
    </header>
  );
}

export default AppHeader;
