import { createSelector } from 'reselect';

const baseData = ({ CurrentProject }) => CurrentProject.baseData;

export const selectBaseData = createSelector(
	[baseData],
	(baseData) => baseData,
);
