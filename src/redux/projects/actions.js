import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Projects]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LIST_RELOAD: `${prefix} list-reload`,
	LIST_REFRESH: `${prefix} list-refresh`,
	PROJECT_SELECT: `${prefix} project-select`,
	PROJECT_CREATE: `${prefix} project-create`,
	PROJECT_UPDATE: `${prefix} project-update`,
	PROJECT_REMOVE: `${prefix} project-remove`,
};

export const projectsActions = {
	...TYPES,
	listReload: makeActionCreator(TYPES.LIST_RELOAD),
	listRefresh: makeActionCreator(TYPES.LIST_REFRESH, 'list'),
	projectSelect: makeActionCreator(TYPES.PROJECT_SELECT, 'id'),

	projectCreate: makeActionCreator(TYPES.PROJECT_CREATE, 'data'),
	projectUpdate: makeActionCreator(TYPES.PROJECT_UPDATE, 'id', 'data'),
	projectRemove: makeActionCreator(TYPES.PROJECT_REMOVE, 'id'),
};
