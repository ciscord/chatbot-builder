import { createSelector } from 'reselect';

const newProjectVisible = ({ Modals }) => Modals.newProjectVisible;
const taskVisible = ({ Modals }) => Modals.taskVisible;
const triggerVisible = ({ Modals }) => Modals.triggerVisible;
const functionVisible = ({ Modals }) => Modals.functionVisible;
const outputVisible = ({ Modals }) => Modals.outputVisible;

export const selectNewProjectVisible = createSelector(
	[newProjectVisible],
	(newProjectVisible) => newProjectVisible,
);

export const selectTaskVisible = createSelector(
	[taskVisible],
	(taskVisible) => taskVisible,
);

export const selectTriggerVisible = createSelector(
	[triggerVisible],
	(triggerVisible) => triggerVisible,
);

export const selectFunctionVisible = createSelector(
	[functionVisible],
	(functionVisible) => functionVisible,
);

export const selectOutputVisible = createSelector(
	[outputVisible],
	(outputVisible) => outputVisible,
);
