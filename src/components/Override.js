import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Override extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}

Override.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  component: PropTypes.oneOfType([
             PropTypes.func,
             PropTypes.element
  ]).isRequired,
};

export default Override;
