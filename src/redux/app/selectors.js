import { createSelector } from 'reselect';

const appStarted = ({ App }) => App.appStarted;
const UI = ({ App }) => App.UI;

export const selectAppStarted = createSelector(
	[appStarted],
	(appStarted) => appStarted,
);

export const selectUI = createSelector(
	[UI],
	(UI) => UI,
);
