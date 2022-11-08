import React, { useState, useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { Menu, Popover } from 'antd';
import { currentTaskActions } from '../../redux/currentTask/actions';
import { modalsActions } from '../../redux/modals/actions';
import { tasksActions } from '../../redux/tasks/actions';

import { Wrapper, MenuWrapper } from './ItemMenu.style';
import { MoreOutlined } from '@ant-design/icons';

const ItemMenu = ({ items, onClick, placement }) => {

  const [visible, setVisible] = useState(false);

  const onClickItem = useCallback((event) => {
    const { target } = event;
    const { key } = target.dataset;

    onClick(key);
    setVisible(false);
  }, [onClick, setVisible]);

  const menuItems = items.map(item => {
    const { key, title } = item;
    return (
      <div
        className="item"
        key={key}
        data-key={key}
        onClick={onClickItem}
      >
        {title}
      </div>
    );
  });

  const content = (
    <MenuWrapper>
      {menuItems}
    </MenuWrapper>
  );

  return (
    <Wrapper>
      <Popover
        trigger="click"
        placement={placement}
        content={content}
        visible={visible}
        onVisibleChange={setVisible}
      >
        <MoreOutlined />
      </Popover>
    </Wrapper>
  );
};

ItemMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
  placement: PropTypes.string,
};

ItemMenu.defaultProps = {
  placement: 'leftTop',
};

export default ItemMenu;
export { ItemMenu };
