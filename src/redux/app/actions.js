import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[App]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	APP_START: `${prefix} start`,
	APP_STARTED: `${prefix} app-started`,
	UI_MERGE: `${prefix} ui-merge`,

	LOAD_COMMON_DATA: `${prefix} load-common-data`,
};

export const appActions = {
	...TYPES,
	appStart: makeActionCreator(TYPES.APP_START),
	appStarted: makeActionCreator(TYPES.APP_STARTED),
	uiMerge: makeActionCreator(TYPES.UI_MERGE, 'UI'),
	loadCommonData: makeActionCreator(TYPES.LOAD_COMMON_DATA),
};
