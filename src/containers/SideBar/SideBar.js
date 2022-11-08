import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { useMount } from 'react-use';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Menu } from 'antd';

import { selectUIRoute } from '../../redux/router/selectors';
import { SECTIONS } from '../../constants/sidebar';
import { SidebarUtils } from '../../utils/SidebarUtils';

import { isArray } from '../../lib/lodash';
import { Logo } from '../../components/Logo/Logo';

const { SubMenu } = Menu;

const SideBar = () => {

  const dispatch = useDispatch();
  const uiRoute = useSelector(selectUIRoute);

  const [openKeys, setOpenKeys] = useState([]);

  const selectedKey = SidebarUtils.getKeyByRoute(uiRoute);

  useMount(() => {
    const parentKey = SidebarUtils.getParentMenuKey(selectedKey);
    if (parentKey) {
      setOpenKeys([parentKey]);
    }
  });

  const onMenuItemSelect = useCallback((eventData) => {
    const { key } = eventData;
    const parentKey = SidebarUtils.getParentMenuKey(key);
    const route = SidebarUtils.getRouteByKey(key);
    if (!route) {
      if (parentKey) {
        openKeys.push(parentKey);
        setOpenKeys(openKeys);
      }
      return;
    }

    if (!parentKey) {
      setOpenKeys([]);
    }
    dispatch(push(route));
  }, [dispatch, openKeys, setOpenKeys]);

  const onOpenChange = useCallback((newOpenKeys) => {
    setOpenKeys(newOpenKeys);
  }, [openKeys, setOpenKeys]);

  const menuItems = SECTIONS.map(subMenu => {
    const { key, title, icon, children } = subMenu;

    if (!isArray(children)) {
      return (
        <Menu.Item key={key}>
          <span>
            <LegacyIcon type={icon} />
            <span>{title}</span>
          </span>
        </Menu.Item>
      );
    }

    const items = children.map(item => {
      const { key, title, icon } = item;
      return (
        <Menu.Item key={key}>
          <span>
            {icon && (<LegacyIcon type={icon} />)}
            <span>{title}</span>
          </span>
        </Menu.Item>
      );
    });

    return (
      <SubMenu
        key={key}
        title={(
          <span>
            <LegacyIcon type={icon} />
            <span>{title}</span>
          </span>
        )}
      >
        {items}
      </SubMenu>
    );
  });

  return (
    <>
      <Logo />
      <Menu
        selectable
        multiple={false}
        mode="inline"
        theme="dark"
        selectedKeys={[selectedKey]}
        openKeys={openKeys}
        onSelect={onMenuItemSelect}
        onOpenChange={onOpenChange}
      >
        {menuItems}
      </Menu>
    </>
  );
};

export default SideBar;
export { SideBar };
