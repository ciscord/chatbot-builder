import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Data Flow]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LIST_RELOAD: `${prefix} list-reload`,
	LIST_REFRESH: `${prefix} list-refresh`,

	DATA_FLOW_SAVE: `${prefix} data-flow-save`,
	DATA_FLOW_PARSE: `${prefix} data-flow-parse`,
	DATA_FLOW_CLEAR: `${prefix} data-flow-clear`,
};

export const dataFlowActions = {
	...TYPES,
	listReload: makeActionCreator(TYPES.LIST_RELOAD, 'projectID'),
	listRefresh: makeActionCreator(TYPES.LIST_REFRESH, 'list'),

	dataFlowSave: makeActionCreator(TYPES.DATA_FLOW_SAVE),
	dataFlowParse: makeActionCreator(TYPES.DATA_FLOW_PARSE, 'taskID'),
	dataFlowClear: makeActionCreator(TYPES.DATA_FLOW_CLEAR),
};
