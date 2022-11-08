import { createSelector } from 'reselect';
import { orderBy } from '../../lib/lodash';
import { TASK_TYPES } from '../../constants/tasks';

const list = ({ Tasks }) => Tasks.list;

export const selectList = createSelector(
	[list],
	(list) => orderBy(list, ['order'], ['asc']),
);

export const selectTaskByID = (id) => createSelector(
	[list],
	(list) => list.find(item => item.id === id),
);

export const selectTasksByProjectID = (projectID) => createSelector(
	[list],
	(list) => {
		const filteredList = list.filter(item => item.projectID === projectID);
		return orderBy(filteredList, ['id'], ['asc']);
	},
);

export const selectTasksByStreamID = (streamID) => createSelector(
	[list],
	(list) => {
		const filteredList = list.filter(item => item.streamID === streamID);
		return orderBy(filteredList, ['id'], ['asc']);
	},
);

export const selectDataFlowTasksByProjectID = (projectID) => createSelector(
	[list],
	(list) => {
		const filteredList = list.filter(item => item.projectID === projectID && item.type === TASK_TYPES.dataFlow);
		return orderBy(filteredList, ['id'], ['asc']);
	},
);

export const selectAnotherTasksList = (taskID) => createSelector(
	[list],
	(list) => {
		const filteredList = list.filter(item => item.id !== taskID);
		return orderBy(filteredList, ['id'], ['asc']);
	},
);
