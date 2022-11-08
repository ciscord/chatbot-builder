import React, { useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import clsx from 'clsx';
import { Typography } from 'antd';

const { Text } = Typography;

const EditableText = ({ value, onChange, className, ...restProps }) => {

  const [editing, setEditing] = useState(false);

  const onStart = useCallback(() => {
    setEditing(true);
  }, [setEditing]);

  const onChangeValue = useCallback((newValue) => {
    onChange(newValue);
    setEditing(false);
  }, [onChange, setEditing]);

  const resClassname = clsx('editable-text', className);

  return (
    <div className={resClassname}>
      <Text
        editable={{
          editing,
          onStart: onStart,
          onChange: onChangeValue
        }}
        {...restProps}
      >
        {value}
      </Text>
    </div>
  );
};

EditableText.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

EditableText.defaultProps = {
  value: '',
  className: '',
  onChange: () => {},
};

export default EditableText;
export { EditableText };
