import React from 'react';

import BooksList from '../../books-list';

const HomePage = () => {
  return (
    <section>
      <div className="container">
        <h1>Books list</h1>
        <BooksList/>
      </div>
    </section>
  );
};

export default HomePage;
