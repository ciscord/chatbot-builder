import React from 'react';

import { Select as LibSelect } from '../../../lib/ui';
import { Field } from '../Field';

import { propTypes, defaultProps } from '../prop-types';

const Select = (props) => {
  const {
    noMargin,
    field,
    form,
    ...restProps
  } = props;

  const { name } = field;
  const { errors, touched } = form;

  const isError = Boolean(touched[name] && errors[name]);
  const errorText = isError ? errors[name] : null;

  const onChangeValue = (value) => {
    const event = {
      target: {
        name: field.name,
        value,
      },
    };
    field.onChange(event);
  };

  const onBlur = () => {
    const event = {
      target: {
        name,
      },
    };
    field.onBlur(event);
  };

  return (
    <Field
      noMargin={noMargin}
      error={errorText}
    >
      <LibSelect
        {...field}
        {...restProps}
        onChange={onChangeValue}
        onBlur={onBlur}
      />
    </Field>
  );
};

Select.propTypes = {
  ...propTypes,
};

Select.defaultProps = {
  ...defaultProps,
};

export default Select;
export { Select };
