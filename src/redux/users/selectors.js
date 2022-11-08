import { createSelector } from 'reselect';
import { orderBy, isArray } from '../../lib/lodash';

const list = ({ Users }) => Users.list;

export const selectList = createSelector(
	[list],
	(list) => orderBy(list, ['id'], ['asc']),
);

export const selectEMailsList = createSelector(
	[list],
	(list) => list.map(item => item.email),
);

export const selectUserByID = (userID) => createSelector(
	[list],
	(list) => list.find(item => item.id === userID),
);

export const selectUsersListByID = (IDs) => createSelector(
	[list],
	(list) => {
		if (!isArray(IDs)) {
			return [];
		}
		return list.filter(item => IDs.includes(item.id));
	},
);
