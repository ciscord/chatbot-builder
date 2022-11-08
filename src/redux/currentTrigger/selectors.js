import { createSelector } from 'reselect';

const baseData = ({ CurrentTrigger }) => CurrentTrigger.baseData;
const preview = ({ CurrentTrigger }) => CurrentTrigger.preview;

export const selectBaseData = createSelector(
	[baseData],
	(baseData) => baseData,
);

export const selectPreview = createSelector(
	[preview],
	(preview) => preview,
);
