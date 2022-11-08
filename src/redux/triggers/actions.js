import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Triggers]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	SYSTEM_TRIGGERS_RELOAD: `${prefix} system-triggers-reload`,
	SYSTEM_TRIGGERS_REFRESH: `${prefix} system-triggers-refresh`,

	SET_INTERVAL_TYPE: `${prefix} set-interval-type`,
	SET_ON_NEW_TYPE: `${prefix} set-on-new-type`,
	SET_ON_COMPLETE_TYPE: `${prefix} set-on-complete-type`,

	TRIGGER_REFRESH: `${prefix} trigger-refresh`,
	TRIGGER_RESET: `${prefix} trigger-reset`,

	UI_MERGE: `${prefix} ui-merge`,
	RESET: `${prefix} reset`,
};

export const triggersActions = {
	...TYPES,
	systemTriggersReload: makeActionCreator(TYPES.SYSTEM_TRIGGERS_RELOAD),
	systemTriggersRefresh: makeActionCreator(TYPES.SYSTEM_TRIGGERS_REFRESH, 'systemTriggersList'),

	setIntervalType: makeActionCreator(TYPES.SET_INTERVAL_TYPE, 'intervalType'),
	setOnNewType: makeActionCreator(TYPES.SET_ON_NEW_TYPE, 'onNewType'),
	setOnCompleteType: makeActionCreator(TYPES.SET_ON_COMPLETE_TYPE, 'onCompleteType'),

	triggerRefresh: makeActionCreator(TYPES.TRIGGER_REFRESH, 'trigger'),
	triggerReset: makeActionCreator(TYPES.TRIGGER_RESET),

	uiMerge: makeActionCreator(TYPES.UI_MERGE, 'UI'),
	reset: makeActionCreator(TYPES.RESET),
};
