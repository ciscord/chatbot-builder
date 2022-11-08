import React, { useCallback, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Input } from 'antd';

const AddTodo = ({ onSubmit }) => {

  const [value, setValue] = useState('');

  const onChange = useCallback(({ target }) => {
    setValue(target.value);
  }, [setValue]);

  const onKeyDown = useCallback(({ keyCode }) => {
    if (keyCode !== 13) {
      return;
    }
    if (value.trim() !== '') {
      onSubmit(value);
      setValue('');
    }
  }, [onSubmit, value, setValue]);

  return (
    <Input
      value={value}
      placeholder="Add a Todo"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddTodo;
export { AddTodo };
