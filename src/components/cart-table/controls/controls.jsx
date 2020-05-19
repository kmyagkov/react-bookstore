import React from 'react';

import './controls.css';

const Controls = () => {
  return (
    <div className="controls">
      <button className="btn btn-success btn-sm"><i className="fa fa-plus"></i></button>
      <button className="btn btn-warning btn-sm"><i className="fa fa-minus"></i></button>
      <button className="btn btn-danger btn-sm"><i className="fa fa-trash"></i></button>
    </div>
  );
};

export default Controls;
