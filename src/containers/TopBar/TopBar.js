import React from 'react';
import { BellOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';

import { UserInfo } from './UserInfo';
import { UserMenu } from './UserMenu';
import { Wrapper } from './TopBar.style';

const TopBar = () => {

	const overlay = (
		<UserMenu />
	);

	return (
		<Wrapper>
			<div className="left" />
			<div className="right">
				<SearchOutlined />
				<BellOutlined />
				<Dropdown overlay={overlay} trigger={['click']}>
					<div>
						<UserInfo />
					</div>
				</Dropdown>
			</div>
		</Wrapper>
  );
};

export default TopBar;
export { TopBar };
