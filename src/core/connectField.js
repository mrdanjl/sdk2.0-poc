import React, { Component } from 'react';

/* need to figure out a better way to do this */
import DescriptionContainer from '../containers/DescriptionContainer';
import TextContainer from '../containers/TextContainer';

const containerMapper = {
  text: TextContainer,
  description: DescriptionContainer,
};

const connectField = (field, overrides) =>
  class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      // we need to push this handler somewhere else ...
      let Container = containerMapper[field.type];

      overrides.forEach(override => {
        if (typeof(override.type) !== 'undefined' && override.type === field.type) {
            Container = override.component;
        }

        if (typeof(override.id) !== 'undefined' && override.id === field.id) {
            Container = override.component;
        }
      });

      return <Container {...field.attributes} />;
    }
  }

export default connectField;
