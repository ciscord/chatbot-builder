import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Select as LibSelect } from 'antd';

import { toNumber, toInteger } from '../../lodash';

const { Option } = LibSelect;

const MultiSelect = ({ type, value, options, onChange, ...restProps }) => {

  const onChangeValue = useCallback((value) => {
    let resValue = value;
    if (type === 'number') {
      resValue = [...value].map(v => toNumber(v));
    }
    if (type === 'integer') {
      resValue = [...value].map(v => toInteger(v));
    }
    onChange(resValue);
  }, [onChange]);

  const selectOptions = options.map(item => (
    <Option key={item.value} value={String(item.value)}>{item.title}</Option>
  ));

  const resValue = (value && value.length)
    ? [...value].map(v => String(v))
    : [];

  return (
    <LibSelect
      mode="multiple"
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

MultiSelect.propTypes = {
  // Type of value
  type: PropTypes.oneOf(['string', 'number', 'integer']),
  // array of Options
  options: TOptions,
  // Value
  value: PropTypes.arrayOf(TValue),
  // OnChange
  onChange: PropTypes.func,
};

MultiSelect.defaultProps = {
  type: 'string',
  options: [],
  value: [],
  onChange: () => {},
};

export default MultiSelect;
export { MultiSelect };
