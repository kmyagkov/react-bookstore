import React from 'react';

import './books-list-item.css';

const BooksListItem = ({book, onAddedToCart}) => {
  const {title, author, image, price} = book;
  return (
    <li className="list-group-item books-list-item">
      <div className="row">
        <div className="col col-12 col-sm-3">
          <img
            style={{width: '100%'}}
            src={image}
            alt={title}
          />
        </div>
        <div className="col col-12 col-sm-9">
          <section className="books-list-item__meta">
            <h3>{title}</h3>
            <p>{author}</p>
            <div className="books-list-item__footer">
              <p>{price} RUB</p>
              <button onClick={onAddedToCart} className="btn btn-primary">Add to cart</button>
            </div>
          </section>
        </div>
      </div>
    </li>
  );
};

export default BooksListItem;
