import React from 'react';
import * as PropTypes from 'prop-types';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { Wrapper } from './DataFlowCard.style';

const DataFlowCard = ({ name, children, onCreate, onRemove }) => {

  return (
    <Wrapper>
      <div className="card">
        <div className="title">{name}</div>
        <div className="content">{children}</div>
      </div>
      <div className="toolbar">
        {onCreate && (
          <Button
            type="primary"
            size="small"
            icon={<PlusOutlined />}
            onClick={onCreate}
          />
        )}
        {onRemove && (
          <Button
            type="default"
            size="small"
            icon={<DeleteOutlined />}
            onClick={onRemove}
          />
        )}
      </div>
    </Wrapper>
  );
};

DataFlowCard.propTypes = {
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  onCreate: PropTypes.func,
  onRemove: PropTypes.func,
};

DataFlowCard.defaultProps = {
  name: '',
  children: null,
  onCreate: null,
  onRemove: null,
};

export default DataFlowCard;
export { DataFlowCard };
