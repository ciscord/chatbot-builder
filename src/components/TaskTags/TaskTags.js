import React from 'react';
import * as PropTypes from 'prop-types';
import { TagOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

import { Wrapper } from './TaskTags.style';

const colors = ['cyan', 'orange', 'green'];

const TaskTags = ({ tags }) => {

  if (!tags) {
    return (
      <Wrapper>
        <TagOutlined />
        <div className="tags" />
      </Wrapper>
    );
  }

  const { length } = tags;
  const diff = length - 2;

  const resTags = length < 3
    ? tags
    : tags.slice(0, 2).concat(`+${diff}`);

  return (
    <Wrapper>
      <TagOutlined />
      <div className="tags">
        {resTags.map((tag, index) => (
          <Tag key={tag} color={colors[index]}>{tag}</Tag>
        ))}
      </div>
    </Wrapper>
  );
};

TaskTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

TaskTags.defaultProps = {
  tags: [],
};

export default TaskTags;
export { TaskTags };
