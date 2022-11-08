import React from 'react';
import * as PropTypes from 'prop-types';
import { Radio } from 'antd';

import { Field } from '../Field';
import { propTypes, defaultProps } from '../prop-types';

const { Button, Group } = Radio;

const RadioButton = (props) => {
  const {
    noMargin,
    field,
    form,
    options,
    ...restProps
  } = props;

  const { name } = field;
  const { errors, touched } = form;

  const isError = Boolean(touched[name] && errors[name]);
  const errorText = isError ? errors[name] : null;

  const items = options.map(item => {
    const { value, title } = item;
    return (
      <Button key={value} value={value}>
        {title}
      </Button>
    );
  });

  return (
    <Field
      noMargin={noMargin}
      error={errorText}
    >
      <Group
        {...field}
        {...restProps}
      >
        {items}
      </Group>
    </Field>
  );
};

RadioButton.propTypes = {
  ...propTypes,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]).isRequired,
  })).isRequired,
};

RadioButton.defaultProps = {
  ...defaultProps,
};

export default RadioButton;
export { RadioButton };
