import React from 'react';

const Input = ({ onChange }) => (
  <label>
    <span>Input</span>
    <input onChange={onChange} type="text" />
  </label>
)

export default Input;
