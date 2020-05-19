import React from 'react';

import './books-list-item.css';

const BooksListItem = ({book}) => {
  const {title, author, image} = book;
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
          </section>
        </div>
      </div>
    </li>
  );
};

export default BooksListItem;
