import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from '../components/Text';

class TextContainer extends Component {
  render() {
    return (
      <div className="field-group">
        <label className="field-label">
          {this.props.label}
          <Text />
        </label>
      </div>
    );
  }
}

export default TextContainer;
