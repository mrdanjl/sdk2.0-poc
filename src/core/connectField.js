import React, { Component } from 'react';
import { getContainerNameFromField } from '../core/utils';

/* need to figure out a better way to do this */
import DescriptionContainer from '../containers/DescriptionContainer';
import TextContainer from '../containers/TextContainer';

const connectField = (field, overrides) =>
  class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const DefaultContainer = getContainerNameFromField(field.type);

      return <DefaultContainer name="asdfasfd" />;
    }
  }

export default connectField;
