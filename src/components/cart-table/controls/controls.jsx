import React from 'react';

import './controls.css';

const Controls = ({listeners}) => {
  const {onIncrease, onDecrease, onDelete} = listeners;

  return (
    <div className="controls">
      <button onClick={onIncrease} className="btn btn-success btn-sm">
        <i className="fa fa-plus"></i>
      </button>
      <button onClick={onDecrease} className="btn btn-warning btn-sm">
        <i className="fa fa-minus"></i>
      </button>
      <button onClick={onDelete} className="btn btn-danger btn-sm">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default Controls;
