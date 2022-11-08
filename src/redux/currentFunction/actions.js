import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Current Function]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	BASE_DATA_REFRESH: `${prefix} base-data-refresh`,
	BASE_DATA_UPDATE: `${prefix} base-data-update`,

	PREVIEW_REQUEST_SEND: `${prefix} preview-request-send`,
	PREVIEW_RESPONSE_SET: `${prefix} preview-response-set`,

	RESET: `${prefix} reset`,
};

export const currentFunctionActions = {
	...TYPES,
	baseDataRefresh: makeActionCreator(TYPES.BASE_DATA_REFRESH, 'baseData'),
	baseDataUpdate: makeActionCreator(TYPES.BASE_DATA_UPDATE, 'baseData'),

	previewRequestSend: makeActionCreator(TYPES.PREVIEW_REQUEST_SEND, 'func'),
	previewResponseSet: makeActionCreator(TYPES.PREVIEW_RESPONSE_SET, 'preview'),

	reset: makeActionCreator(TYPES.RESET),
};
