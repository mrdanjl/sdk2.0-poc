import React, { Component, Children } from 'react';
import connectField from './core/connectField';

/**
 * @description <FormCorp> is the root component of all React FormCorp SDK2
 * @name <FormCorp />
 */
class FormCorp extends Component {
  constructor(props) {
    super(props);

    // moved in later stages to a backend
    this.state = {
      schema: [
        { id: 1, type: 'text', name: 'Foo' },
        { id: 2, type: 'text', name: 'Bar' },
        { id: 3, type: 'description', name: 'Baz', text: 'Hello Sir', },
      ],
      overrides: [],
    };
  }

  componentWillMount() {
    Children.forEach(this.props.children, (child) => {
      if (child.type.name === 'Override') {
        this.setState((prevState) => {
          let overrides = prevState.overrides;
          overrides.push(child.props);

          return {
            overrides: overrides,
          };
        });
      }
    });
  }

  /* to be split out in later versions */
  render() {
    return (
      <form>
        {this.state.schema.map((field) => {
          const FieldComponent = connectField(field, this.overrides);
          return <FieldComponent key={field.id} />;
        })}
      </form>
    );
  }
}

export default FormCorp;
