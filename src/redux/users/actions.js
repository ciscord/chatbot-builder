import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Users]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LIST_RELOAD: `${prefix} list-reload`,
	LIST_REFRESH: `${prefix} list-refresh`,
};

export const usersActions = {
	...TYPES,
	listReload: makeActionCreator(TYPES.LIST_RELOAD),
	listRefresh: makeActionCreator(TYPES.LIST_REFRESH, 'list'),
};
