import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Select as LibSelect } from 'antd';

import { toNumber, toInteger } from '../../lodash';

const { Option } = LibSelect;

const Select = ({ type, value, options, onChange, ...restProps }) => {

  const onChangeValue = useCallback((value) => {
    let resValue = value;
    if (type === 'number') {
      resValue = toNumber(value);
    }
    if (type === 'integer') {
      resValue = toInteger(value);
    }
    onChange(resValue);
  }, [onChange]);

  const selectOptions = options.map(item => (
    <Option
      key={item.value}
      value={item.value}
      disabled={item.disabled}
    >
      {item.title}
    </Option>
  ));

  const resValue = value ? String(value) : null;

  return (
    <LibSelect
      style={{ width: '100%' }}
      value={resValue}
      onChange={onChangeValue}
      {...restProps}
    >
      {selectOptions}
    </LibSelect>
  );
};

const TValue = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);
const TTitle = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.element]);
const TOption = PropTypes.shape({
  value: TValue.isRequired,
  title: TTitle.isRequired,
});
const TOptions = PropTypes.arrayOf(TOption);

Select.propTypes = {
  // Type of value
  type: PropTypes.oneOf(['string', 'number', 'integer']),
  // array of Options
  options: TOptions,
  // Value
  value: TValue,
  // OnChange
  onChange: PropTypes.func,
};

Select.defaultProps = {
  type: 'string',
  options: [],
  value: null,
  onChange: () => {},
};

export default Select;
export { Select };
