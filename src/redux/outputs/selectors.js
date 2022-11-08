import { createSelector } from 'reselect';

const systemOutputs = ({ Outputs }) => Outputs.systemOutputs;
const output = ({ Outputs }) => Outputs.output;

export const selectSystemOutputs = createSelector(
	[systemOutputs],
	(systemOutputs) => systemOutputs,
);

export const selectOutput = createSelector(
	[output],
	(output) => output,
);
