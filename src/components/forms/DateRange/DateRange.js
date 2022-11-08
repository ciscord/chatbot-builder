import React from 'react';
import { DatePicker, Select as LibSelect } from 'antd';

import { Field } from '../Field';
import { propTypes, defaultProps } from '../prop-types';
import { isArray } from '../../../lib/lodash';

const { RangePicker } = DatePicker;

const DateRange = (props) => {
  const {
    noMargin,
    field,
    form,
    ...restProps
  } = props;

  const { name, value } = field;
  const { errors, touched } = form;

  const isError = Boolean(touched[name] && errors[name]);
  const errorText = isError ? errors[name] : null;
  const fieldValue = (value && value.length) ? [...value] : [];

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
      <RangePicker
        {...field}
        {...restProps}
        value={fieldValue}
        onChange={onChangeValue}
        onBlur={onBlur}
      />
    </Field>
  );
};

DateRange.propTypes = {
  ...propTypes,
};

DateRange.defaultProps = {
  ...defaultProps,
};

export default DateRange;
export { DateRange };
