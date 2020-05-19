import React from 'react';

import './cart.css';

const Cart = () => {
  return (
    <div className="header-cart">
      <i className="fa fa-shopping-cart header-cart__icon"/>
      <div className="header-cart__content">
        <span className="header-cart__quantity">10 items</span>
        <span className="header-cart__amount">(1200 RUB)</span>
      </div>
    </div>
  );
};

export default Cart;
