import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Flow Actions]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	SYSTEM_ACTIONS_RELOAD: `${prefix} system-actions-reload`,
	SYSTEM_ACTIONS_REFRESH: `${prefix} system-actions-refresh`,

	ACTIONS_LIST_REFRESH: `${prefix} actions-list-refresh`,
	ACTION_CREATE: `${prefix} action-create`,
	ACTION_REMOVE: `${prefix} action-remove`,

	FUNCTIONS_LIST_REFRESH: `${prefix} functions-list-refresh`,
	FUNCTION_UPDATE: `${prefix} function-update`,
	FUNCTION_REMOVE: `${prefix} function-remove`,

	RESET: `${prefix} reset`,
};

export const flowActions = {
	...TYPES,
	systemActionsReload: makeActionCreator(TYPES.SYSTEM_ACTIONS_RELOAD),
	systemActionsRefresh: makeActionCreator(TYPES.SYSTEM_ACTIONS_REFRESH, 'systemActions'),

	actionsListRefresh: makeActionCreator(TYPES.ACTIONS_LIST_REFRESH, 'actionsList'),
	actionCreate: makeActionCreator(TYPES.ACTION_CREATE, 'type'),
	actionRemove: makeActionCreator(TYPES.ACTION_REMOVE, 'id'),

	functionsListRefresh: makeActionCreator(TYPES.FUNCTIONS_LIST_REFRESH, 'functionsList'),
	functionUpdate: makeActionCreator(TYPES.FUNCTION_UPDATE, 'functionData'),
	functionRemove: makeActionCreator(TYPES.FUNCTION_REMOVE, 'id'),

	reset: makeActionCreator(TYPES.RESET),
};
