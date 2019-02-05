import React from 'react';

import './Switch.css';

const Switch = ({ isChecked, onClick }) => (
  <label
    className={`toggleButton ${isChecked ? 'toggleButton--checked' : ''}`}
    >
    <input onClick={onClick} className="control" type="checkbox" />
  </label>
);

export default Switch;

