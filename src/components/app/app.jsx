import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home';
import CartPage from '../pages/cart';
import AppHeader from './app-header';
import CartTable from '../cart-table';

import './app.css';

const App = () => {
  return (
    <div className="app">
      <AppHeader extClass="app__header"/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/cart" component={CartPage}/>
      </Switch>
      <CartTable extClass="app__order"/>
    </div>
  );
};

export default App;
