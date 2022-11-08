import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Streams]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LIST_RELOAD: `${prefix} list-reload`,
	LIST_REFRESH: `${prefix} list-refresh`,
	LIST_REORDER: `${prefix} list-reorder`,

	STREAM_CREATE: `${prefix} stream-create`,
	STREAM_UPDATE: `${prefix} stream-update`,
	STREAM_REMOVE: `${prefix} stream-remove`,
};

export const streamsActions = {
	...TYPES,
	listReload: makeActionCreator(TYPES.LIST_RELOAD, 'projectID'),
	listRefresh: makeActionCreator(TYPES.LIST_REFRESH, 'list'),
	listReorder: makeActionCreator(TYPES.LIST_REORDER, 'list'),

	streamCreate: makeActionCreator(TYPES.STREAM_CREATE, 'data'),
	streamUpdate: makeActionCreator(TYPES.STREAM_UPDATE, 'id', 'data'),
	streamRemove: makeActionCreator(TYPES.STREAM_REMOVE, 'id'),
};
