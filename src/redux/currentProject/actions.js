import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Current Project]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	BASE_DATA_RELOAD: `${prefix} base-data-reload`,
	BASE_DATA_REFRESH: `${prefix} base-data-refresh`,
	BASE_DATA_UPDATE: `${prefix} base-data-update`,
};

export const currentProjectActions = {
	...TYPES,
	baseDataReload: makeActionCreator(TYPES.BASE_DATA_RELOAD, 'id'),
	baseDataRefresh: makeActionCreator(TYPES.BASE_DATA_REFRESH, 'baseData'),
	baseDataUpdate: makeActionCreator(TYPES.BASE_DATA_UPDATE, 'baseData'),
};
