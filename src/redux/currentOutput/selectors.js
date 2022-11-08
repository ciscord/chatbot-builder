import { createSelector } from 'reselect';

const baseData = ({ CurrentOutput }) => CurrentOutput.baseData;
const preview = ({ CurrentOutput }) => CurrentOutput.preview;

export const selectBaseData = createSelector(
	[baseData],
	(baseData) => baseData,
);

export const selectPreview = createSelector(
	[preview],
	(preview) => preview,
);
