import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Menu } from 'antd';

import { authActions } from '../../../redux/auth/actions';
import { MENU_KEYS } from '../../../constants/userMenu';

import { menuItems, routes } from './assets';

const { Item, SubMenu } = Menu;

const UserMenu = () => {

  const dispatch = useDispatch();

  const onClick = useCallback((eventData) => {
    const { key } = eventData;
    switch (key) {
      case MENU_KEYS.logout: {
        dispatch(authActions.logout());
        break;
      }
      case MENU_KEYS.workbench:
      case MENU_KEYS.profile:
      case MENU_KEYS.security:
      case MENU_KEYS.billing: {
        const route = routes[key];
        dispatch(push(route));
        break;
      }
      default:
    }
  }, [dispatch]);

  const items = menuItems.map((item, index) => {
    const { id, title, children } = item;
    if (!children) {
      return (<Item key={id}>{title}</Item>);
    }

    const subItems = children.map(subItem => {
      const { id, title } = subItem;
      return (<Item key={id}>{title}</Item>);
    });

    return (
      <SubMenu key={id} title={title}>
        {subItems}
      </SubMenu>
    );
  });

  return (
    <Menu onClick={onClick}>
      {items}
    </Menu>
  );
};

export default UserMenu;
export { UserMenu };
