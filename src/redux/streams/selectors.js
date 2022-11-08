import { createSelector } from 'reselect';
import { orderBy } from '../../lib/lodash';

const list = ({ Streams }) => Streams.list;

export const selectList = createSelector(
	[list],
	(list) => orderBy(list, ['id'], ['asc']),
);

export const selectListByProjectID = (projectID) => createSelector(
	[list],
	(list) => list.filter(item => item.projectID === projectID),
);

export const selectByID = (id) => createSelector(
	[list],
	(list) => list.find(item => item.id === id),
);
