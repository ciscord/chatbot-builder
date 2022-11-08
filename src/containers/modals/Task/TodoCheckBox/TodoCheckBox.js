import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Checkbox as LibCheckBox } from 'antd';

const TodoCheckBox = ({ label, done, fieldProps }) => {

  const { field } = fieldProps;
  const { name, value, ...restFieldProps } = field;

  const onChangeValue = useCallback(({ target }) => {
    const newDone = target.checked;
    const event = {
      target: {
        name,
        value: {
          label,
          done: newDone,
        },
      },
    };
    field.onChange(event);
  }, [field]);

  return (
    <LibCheckBox
      {...restFieldProps}
      checked={done}
      onChange={onChangeValue}
    >
      {label}
    </LibCheckBox>
  );
};

TodoCheckBox.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  fieldProps: PropTypes.object,
};

TodoCheckBox.defaultProps = {
  label: '',
  done: false,
  fieldProps: {},
};

export default TodoCheckBox;
export { TodoCheckBox };
