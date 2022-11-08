import React from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import { selectUI } from '../../redux/app/selectors';

import { MainContent } from '../../components/layouts';
import { TopBar } from '../TopBar/TopBar';
import { SideBar } from '../SideBar';
import { Breadcrumbs } from '../Breadcrumbs';
import { RestrictedRoutes } from '../../routes/RestrictedRoutes';

import { Wrapper } from './Root.style';

const { Header, Sider, Content } = Layout;

const Root = () => {

	const { loading } = useSelector(selectUI);

	return (
		<Wrapper>
			<Layout hasSider className="root-layout">
				<Sider
					collapsible
					theme="dark"
					width={240}
				>
					<SideBar />
				</Sider>
				<Layout>
					<Header className="root-header">
						<TopBar />
					</Header>
					<Breadcrumbs className="root-breadcrumbs" />
					<Content className="root-content">
						<MainContent>
							{!loading && (
								<RestrictedRoutes />
							)}
						</MainContent>
					</Content>
				</Layout>
			</Layout>
		</Wrapper>
	);
};

export default Root;
export { Root };
