import React from 'react';
import * as PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import { Wrapper } from './ButtonAdd.style';

const ButtonAdd = ({ title, size, onClick }) => {

  return (
    <Wrapper size={size} onClick={onClick}>
      <div className="image">
        <PlusOutlined />
        <div className="title">{title}</div>
      </div>
    </Wrapper>
  );
};

ButtonAdd.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.number,
};

ButtonAdd.defaultProps = {
  size: 120,
};

export default ButtonAdd;
export { ButtonAdd };
