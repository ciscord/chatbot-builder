import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Current Task]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	BASE_DATA_RELOAD: `${prefix} base-data-reload`,
	BASE_DATA_REFRESH: `${prefix} base-data-refresh`,
	BASE_DATA_UPDATE: `${prefix} base-data-update`,

	UI_MERGE: `${prefix} ui-merge`,
	RESET: `${prefix} reset`,
};

export const currentTaskActions = {
	...TYPES,
	baseDataReload: makeActionCreator(TYPES.BASE_DATA_RELOAD, 'id'),
	baseDataRefresh: makeActionCreator(TYPES.BASE_DATA_REFRESH, 'baseData'),
	baseDataUpdate: makeActionCreator(TYPES.BASE_DATA_UPDATE, 'baseData'),

	uiMerge: makeActionCreator(TYPES.UI_MERGE, 'UI'),
	reset: makeActionCreator(TYPES.RESET),
};
