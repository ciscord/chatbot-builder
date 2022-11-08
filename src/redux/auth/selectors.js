import { createSelector } from 'reselect';

const user = ({ Auth }) => Auth.user;
const UI = ({ Auth }) => Auth.UI;

export const selectUser = createSelector(
	[user],
	(user) => user,
);

export const selectUI = createSelector(
	[UI],
	(UI) => UI,
);

export const selectIsLoggedIn = createSelector(
	[selectUser],
	(user) => Boolean(user && user.email),
);
