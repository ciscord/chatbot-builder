import React from 'react';

import { Input as LibInput } from 'antd';
import { Field } from '../Field';

import { propTypes, defaultProps } from '../prop-types';

const { TextArea: LibTextArea } = LibInput;

const TextArea = (props) => {
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

  return (
    <Field
      noMargin={noMargin}
      error={errorText}
    >
      <LibTextArea
        {...field}
        {...restProps}
      />
    </Field>
  );
};

TextArea.propTypes = {
  ...propTypes,
};

TextArea.defaultProps = {
  ...defaultProps,
};

export default TextArea;
export { TextArea };
