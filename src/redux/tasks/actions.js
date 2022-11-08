import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Tasks]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LIST_RELOAD: `${prefix} list-reload`,
	LIST_REFRESH: `${prefix} list-refresh`,

	TASK_UPDATE: `${prefix} task-update`,
	TASK_REORDER: `${prefix} task-reorder`,
	TASK_REMOVE: `${prefix} task-remove`,
	TASK_MOVE: `${prefix} task-move`,
};

export const tasksActions = {
	...TYPES,
	listReload: makeActionCreator(TYPES.LIST_RELOAD, 'projectID'),
	listRefresh: makeActionCreator(TYPES.LIST_REFRESH, 'list'),

	taskUpdate: makeActionCreator(TYPES.TASK_UPDATE, 'id', 'data'),
	taskReorder: makeActionCreator(TYPES.TASK_REORDER, 'tasksList'),
	taskRemove: makeActionCreator(TYPES.TASK_REMOVE, 'id'),
	taskMove: makeActionCreator(TYPES.TASK_MOVE, 'id', 'streamID'),
};
