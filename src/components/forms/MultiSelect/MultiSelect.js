import React from 'react';

import { MultiSelect as LibMultiSelect } from '../../../lib/ui';
import { Field } from '../Field';

import { propTypes, defaultProps } from '../prop-types';

const MultiSelect = (props) => {
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
        name,
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
      <LibMultiSelect
        {...field}
        {...restProps}
        onChange={onChangeValue}
        onBlur={onBlur}
      />
    </Field>
  );
};

MultiSelect.propTypes = {
  ...propTypes,
};

MultiSelect.defaultProps = {
  ...defaultProps,
};

export default MultiSelect;
export { MultiSelect };
