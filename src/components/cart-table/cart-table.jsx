import React from 'react';

import Controls from './controls';

import './cart-table.css';

const CartTable = ({extClass}) => {
  return (
    <div className={`cart-table ${extClass}`}>
      <div className="table-responsive">
        <table className="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Idiot</td>
            <td>1</td>
            <td>200 rub</td>
            <td className="cart-table__actions">
              <Controls/>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p className="cart-table__total">Total: 200 RUB</p>
    </div>
  );
};

export default CartTable;
