import { createSelector } from 'reselect';

const baseData = ({ CurrentFunction }) => CurrentFunction.baseData;
const preview = ({ CurrentFunction }) => CurrentFunction.preview;

export const selectBaseData = createSelector(
	[baseData],
	(baseData) => baseData,
);

export const selectPreview = createSelector(
	[preview],
	(preview) => preview,
);
