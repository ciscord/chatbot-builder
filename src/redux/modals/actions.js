import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Modals]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	NEW_PROJECT_SHOW: `${prefix} new-project-show`,
	NEW_PROJECT_HIDE: `${prefix} new-project-hide`,
	TASK_SHOW: `${prefix} task-show`,
	TASK_HIDE: `${prefix} task-hide`,
	TRIGGER_SHOW: `${prefix} trigger-show`,
	TRIGGER_HIDE: `${prefix} trigger-hide`,
	FUNCTION_SHOW: `${prefix} function-show`,
	FUNCTION_HIDE: `${prefix} function-hide`,
	OUTPUT_SHOW: `${prefix} output-show`,
	OUTPUT_HIDE: `${prefix} output-hide`,
};

export const modalsActions = {
	...TYPES,
	newProjectShow: makeActionCreator(TYPES.NEW_PROJECT_SHOW),
	newProjectHide: makeActionCreator(TYPES.NEW_PROJECT_HIDE),
	taskShow: makeActionCreator(TYPES.TASK_SHOW),
	taskHide: makeActionCreator(TYPES.TASK_HIDE),
	triggerShow: makeActionCreator(TYPES.TRIGGER_SHOW),
	triggerHide: makeActionCreator(TYPES.TRIGGER_HIDE),
	functionShow: makeActionCreator(TYPES.FUNCTION_SHOW),
	functionHide: makeActionCreator(TYPES.FUNCTION_HIDE),
	outputShow: makeActionCreator(TYPES.OUTPUT_SHOW),
	outputHide: makeActionCreator(TYPES.OUTPUT_HIDE),
};
