import { createSelector } from 'reselect';
import { orderBy } from '../../lib/lodash';

const list = ({ Projects }) => Projects.list;
const selected = ({ Projects }) => Projects.selected;

export const selectList = createSelector(
	[list],
	(list) => orderBy(list, ['order'], ['asc']),
);

export const selectProjectByID = (id) => createSelector(
	[list],
	(list) => list.find(item => item.id === id),
);

export const selectedProject = createSelector(
	[selected],
	(selected) => selected,
);
