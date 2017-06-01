import React from 'react';

const Text = ({ value, ...props }) =>
  <input type="text" defaultValue={value} {...props} />

export default Text;
