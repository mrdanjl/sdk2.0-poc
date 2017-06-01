import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from '../components/Description';

class DescriptionContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="field-group">
        <Description {...this.props} />
      </div>
    );
  }
}

export default DescriptionContainer;
