import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Breadcrumbs]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	DATA_FLOW_TASKS_LIST_RELOAD: `${prefix} data-flow-tasks-list-reload`,
	DATA_FLOW_UI_MERGE: `${prefix} data-flow-ui-merge`,
};

export const breadcrumbsActions = {
	...TYPES,
	dataFlowTasksListReload: makeActionCreator(TYPES.DATA_FLOW_TASKS_LIST_RELOAD, 'projectID'),
	dataFlowUIMerge: makeActionCreator(TYPES.DATA_FLOW_UI_MERGE, 'dataFlowUI'),
};
