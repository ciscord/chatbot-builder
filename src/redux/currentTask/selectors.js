import { createSelector } from 'reselect';

const baseData = ({ CurrentTask }) => CurrentTask.baseData;
const UI = ({ CurrentTask }) => CurrentTask.UI;

export const selectBaseData = createSelector(
	[baseData],
	(baseData) => baseData,
);

export const selectUI = createSelector(
	[UI],
	(UI) => UI,
);
