import React from 'react';
import * as PropTypes from 'prop-types';

const FieldWrapper = ({ label, required, children }) => {

  const reqSpan = required
    ? (<span className="required"> *</span>)
    : null;

  return (
    <div className="field">
      <div className="label">{label}{reqSpan}</div>
      {children}
    </div>
  );
};

FieldWrapper.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  required: PropTypes.bool,
};

FieldWrapper.defaultProps = {
  label: '',
  required: false,
  children: null,
};

export default FieldWrapper;
export { FieldWrapper };
