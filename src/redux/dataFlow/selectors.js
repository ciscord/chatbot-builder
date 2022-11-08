import { createSelector } from 'reselect';

const list = ({ DataFlow }) => DataFlow.list;

export const selectList = createSelector(
	[list],
	(list) => list,
);

export const selectFlowByTaskID = (taskID) => createSelector(
	[list],
	(list) => list.find(flow => flow.taskID === taskID),
);
