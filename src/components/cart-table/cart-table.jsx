import React from 'react';
import {connect} from 'react-redux';

import Controls from './controls';

import './cart-table.css';

const CartTable = (props) => {
  const {
    extClass,
    items,
    total,
    onIncrease,
    onDecrease,
    onDelete
  } = props;

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
          {
            items.map((item, i) => {
              const {id, title, amount, totalPrice} = item;
              const listeners = {
                onIncrease: () => {onIncrease(id)},
                onDecrease: () => {onDecrease(id)},
                onDelete: () => {onDelete(id)}
              };

              return (
                <tr key={id}>
                  <th scope="row">{ i + 1 }</th>
                  <td>{title}</td>
                  <td>{amount}</td>
                  <td>{totalPrice} RUB</td>
                  <td className="cart-table__actions">
                    <Controls listeners={listeners} id={id}/>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
      <p className="cart-table__total">Total: {total} RUB</p>
    </div>
  );
};

const mapStateToProps = ({cartItems, orderTotal}) => ({
  items: cartItems,
  total: orderTotal
});

const mapDispatchToProps = () => ({
  onIncrease: (id) => {
    console.log('inc', id)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
