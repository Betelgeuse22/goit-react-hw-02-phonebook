import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
  <>
    <p>Find contacts by name</p>
    <input
      type="text"
      value={value}
      onChange={event => onChangeFilter(event.currentTarget.value)}
    />
  </>
);

export default Filter;
