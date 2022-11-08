import { createSelector } from 'reselect';
import { findIndex } from '../../lib/lodash';

const systemActions = ({ FlowActions }) => FlowActions.systemActions;
const actionsList = ({ FlowActions }) => FlowActions.actionsList;
const functionsList = ({ FlowActions }) => FlowActions.functionsList;

export const selectSystemActions = createSelector(
	[systemActions],
	(systemActions) => systemActions,
);

export const selectActionsList = createSelector(
	[actionsList],
	(actionsList) => actionsList,
);

export const selectFunctionsList = createSelector(
	[functionsList],
	(functionsList) => functionsList,
);

export const selectFunctionByID = (id) => createSelector(
	[functionsList],
	(functionsList) => functionsList.find(item => item.id === id),
);

export const selectFunctionsFromPreviousAction = (actionID) => createSelector(
	[actionsList, functionsList],
	(actionsList, functionsList) => {
		const currentIndex = findIndex(actionsList, { id: actionID });
		if (currentIndex === 0) {
			return [];
		}

		const previousAction = actionsList[currentIndex - 1];
		const previousActionID = previousAction?.id || null;
		if (!previousActionID) {
			return [];
		}

		return functionsList.filter(func => func.actionID === previousActionID);
	},
);
