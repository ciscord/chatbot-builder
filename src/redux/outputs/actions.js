import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Outputs]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	SYSTEM_OUTPUTS_RELOAD: `${prefix} system-outputs-reload`,
	SYSTEM_OUTPUTS_REFRESH: `${prefix} system-outputs-refresh`,

	OUTPUT_REFRESH: `${prefix} output-refresh`,
	OUTPUT_CLEAR: `${prefix} output-clear`,

	RESET: `${prefix} reset`,
};

export const outputsActions = {
	...TYPES,
	systemOutputsReload: makeActionCreator(TYPES.SYSTEM_OUTPUTS_RELOAD),
	systemOutputsRefresh: makeActionCreator(TYPES.SYSTEM_OUTPUTS_REFRESH, 'systemOutputs'),

	outputRefresh: makeActionCreator(TYPES.OUTPUT_REFRESH, 'output'),
	outputClear: makeActionCreator(TYPES.OUTPUT_CLEAR),

	reset: makeActionCreator(TYPES.RESET),
};
