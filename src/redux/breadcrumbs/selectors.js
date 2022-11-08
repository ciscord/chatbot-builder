import { createSelector } from 'reselect';

const dataFlowUI = ({ Breadcrumbs }) => Breadcrumbs.dataFlowUI;

export const selectDataFlowUI = createSelector(
	[dataFlowUI],
	(dataFlowUI) => dataFlowUI,
);
