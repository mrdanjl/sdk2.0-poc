import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Description from '../components/Description';

class DescriptionContainer extends Component {
  render() {
    return (
      <div class="field-group">
        <Description {...this.props} />
      </div>
    );
  }
}

export default DescriptionContainer;
