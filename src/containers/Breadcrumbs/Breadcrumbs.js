import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useMount } from 'react-use';
import { Breadcrumb, Icon, Select } from 'antd';

import { Icon as LegacyIcon } from '@ant-design/compatible';
import { projectsActions } from '../../redux/projects/actions';
import { tasksActions } from '../../redux/tasks/actions';
import { selectList as selectProjectList, selectedProject } from '../../redux/projects/selectors';
import { selectList as selectTaskList } from '../../redux/tasks/selectors';

import { selectUIRoute } from '../../redux/router/selectors';
import { SidebarUtils } from '../../utils/SidebarUtils';
import { UI_ROUTES } from '../../constants/routes';
import { SECTION_KEYS, SECTION_TITLES, SECTION_ICONS, KEYS_ROUTES, PARENT_KEYS_ROUTES } from '../../constants/sidebar';

import { DataFlowForms } from './DataFlowForms';
import { Wrapper } from './Breadcrumbs.style';

const { Option } = Select;
const { Item } = Breadcrumb;

const dataFlowRoutes = [UI_ROUTES.triggers, UI_ROUTES.actions, UI_ROUTES.outputs];

const Breadcrumbs = () => {
	const uiRoute = useSelector(selectUIRoute);
	const selectedKey = SidebarUtils.getKeyByRoute(uiRoute);
	const parentKey = SidebarUtils.getParentMenuKey(selectedKey);

	const parentIcon = SECTION_ICONS[parentKey];
	const parentTitle = SECTION_TITLES[parentKey];
	const parentLink = PARENT_KEYS_ROUTES[parentKey];

	const selectedIcon = SECTION_ICONS[selectedKey] || null;
	const selectedTitle = SECTION_TITLES[selectedKey];
	const selectedLink = KEYS_ROUTES[selectedKey] || UI_ROUTES.root;

	const dispatch = useDispatch();
	const list = useSelector(selectProjectList);
	const taskList = useSelector(selectTaskList);
	const projectId = useSelector(selectedProject);

	const showDataFlowForms = dataFlowRoutes.includes(uiRoute);

	useMount(() => {
		dispatch(projectsActions.listReload());
	});

	const handleChangeProject = value => {
		console.log(`selected ${value}`);
		dispatch(projectsActions.projectSelect(value));
		dispatch(tasksActions.listReload(value));
	};

	const handleChangeTask = value => {
		console.log(`selected ${value}`);
	};

	const projects = list.map(project => {
		const { id, name } = project;
		return (
			<Option value={id} key={id}>
				{name}
			</Option>
		);
	});

	const tasks = taskList.map(task => {
		const { id, title } = task;
		return (
			<Option value={id} key={id}>
				{title}
			</Option>
		);
	});

	return (
		<Wrapper>
			<Breadcrumb>
				{parentKey && (
					<Item>
						{parentIcon && <LegacyIcon type={parentIcon} />}
						<a href={parentLink}>{parentTitle}</a>
					</Item>
				)}
				<Item>
					{selectedIcon && <LegacyIcon type={selectedIcon} />}
					<a href={selectedLink}>{selectedTitle}</a>
				</Item>
				{selectedKey === SECTION_KEYS.interaction && (
					<>
						<Item>
							<Select style={{ width: 150 }} onChange={handleChangeProject}>
								{projects}
							</Select>
						</Item>
						<Item>
							<Select
								mode="multiple"
								style={{ minWidth: '150px' }}
								placeholder="Please select"
								onChange={handleChangeTask}
								disabled={projectId === undefined ? true : false}
							>
								{tasks}
							</Select>
						</Item>
					</>
				)}
			</Breadcrumb>
			{showDataFlowForms && <DataFlowForms />}
		</Wrapper>
	);
};

export default Breadcrumbs;
export { Breadcrumbs };
