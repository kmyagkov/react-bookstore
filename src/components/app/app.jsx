import React from 'react';
import {Route, Switch} from 'react-router-dom';

import HomePage from '../pages/home';
import CartPage from '../pages/cart';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route path="/cart" component={CartPage}/>
    </Switch>
  );
};

export default App;
