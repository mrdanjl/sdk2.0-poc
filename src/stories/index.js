import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import FormCorp from '../index';

import Override from '../components/Override';
import Text from '../components/Text';
import Description from '../components/Description';


storiesOf('FormCorp', module)
  .add('Basic form', () => (
    <FormCorp></FormCorp>
  ))
  .add('Override Text Fields', () => {
    const foo = foo => (
      <h3>Override by Type - Text</h3>
    );

    return (
      <FormCorp id="asdfsaf" key="asdfasdf">
        <Override type="text" component={foo} />
      </FormCorp>
    );
  })
  .add('Override by Field Id', () => {
    class FieldOverride extends React.Component {
      render() {
        return (
          <h4>Override by Field ID - 1</h4>
        )
      }
    }

    return (
      <FormCorp id="asdfsaf" key="asdfasdf">
        <Override id="1" component={FieldOverride} />
      </FormCorp>
    )
  });

storiesOf('Base Fields', module)
  .add('Text - Basic', () => (
    <Text />
  ))
  .add('Text - Value', () => (
    <Text value="Foo" />
  ))
  .add('Text - On Change', () => (
    <Text onChange={ e => console.log(e.target.value) } />
  ))
  .add('Description', () => (
    <Description text="Foo" />
  ));
