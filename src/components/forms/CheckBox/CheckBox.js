import React from 'react';
import * as PropTypes from 'prop-types';
import { Checkbox as LibCheckBox } from 'antd';

import { Field } from '../Field';

import { propTypes, defaultProps } from '../prop-types';

const CheckBox = (props) => {
  const {
    noMargin,
    field,
    form,
    children,
    value,
    ...restProps
  } = props;

  const { name, value: fValue, ...restFieldProps } = field;
  const { errors, touched } = form;

  const isError = Boolean(touched[name] && errors[name]);
  const errorText = isError ? errors[name] : null;
  const fieldValue = Boolean(value);

  return (
    <Field
      noMargin={noMargin}
      error={errorText}
    >
      <LibCheckBox
        {...restFieldProps}
        {...restProps}
        checked={fieldValue}
      >
        {children}
      </LibCheckBox>
    </Field>
  );
};

CheckBox.propTypes = {
  ...propTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ])
};

CheckBox.defaultProps = {
  ...defaultProps,
  children: null,
};

export default CheckBox;
export { CheckBox };
