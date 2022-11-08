import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { DataflowsService } from '../../services/DataflowsService';
import { AdaptUtils } from '../../utils/AdaptUtils';
import {
	SYSTEM_TRIGGER_TYPES,
	SYSTEM_INTERVALS,
	TRIGGER_TYPES,
	INTERVALS,
	ON_NEW,
	ON_COMPLETE,
} from '../../constants/triggers';
import { triggersActions } from './actions';

function* systemTriggersReload() {
	const result = yield call(DataflowsService.getSystemTriggers);
	if (!result) {
		return;
	}

	const systemTriggersList = AdaptUtils.adaptResponse(result);
	yield put(triggersActions.systemTriggersRefresh(systemTriggersList));
}

function* setIntervalType({ payload }) {
	const { intervalType } = payload;
	const triggerType = intervalType !== INTERVALS.none
		? TRIGGER_TYPES.interval
		: null;

	yield put(triggersActions.uiMerge({
		triggerType,
		intervalType,
		onNewType: ON_NEW.none,
		onCompleteType: ON_COMPLETE.none,
	}));

	if (intervalType === INTERVALS.none) {
		yield put(triggersActions.triggerReset());
		return;
	}

	yield put(triggersActions.triggerRefresh({
		systemType: '',
		triggerType,
		inputs: {
			interval: SYSTEM_INTERVALS[intervalType],
		},
		outputs: {},
	}));
}

function* setOnNewType({ payload }) {
	const { onNewType } = payload;
	const triggerType = onNewType !== ON_NEW.none
		? TRIGGER_TYPES.onNew
		: null;

	yield put(triggersActions.uiMerge({
		triggerType,
		intervalType: INTERVALS.none,
		onNewType,
		onCompleteType: ON_COMPLETE.none,
	}));

	if (triggerType === ON_NEW.none) {
		yield put(triggersActions.triggerReset());
		return;
	}

	yield put(triggersActions.triggerRefresh({
		systemType: onNewType,
		triggerType,
		inputs: {},
		outputs: {},
	}));
}

function* setOnCompleteType({ payload }) {
	const { onCompleteType } = payload;
	const triggerType = onCompleteType !== ON_COMPLETE.none
		? TRIGGER_TYPES.onComplete
		: null;

	yield put(triggersActions.uiMerge({
		triggerType,
		intervalType: INTERVALS.none,
		onNewType: ON_NEW.none,
		onCompleteType,
	}));

	if (triggerType === ON_COMPLETE.none) {
		yield put(triggersActions.triggerReset());
		return;
	}

	yield put(triggersActions.triggerRefresh({
		systemType: onCompleteType,
		triggerType,
		inputs: {},
		outputs: {},
	}));
}

export default function* triggersSaga() {
	yield all([
		takeLatest(triggersActions.SYSTEM_TRIGGERS_RELOAD, systemTriggersReload),
		takeLatest(triggersActions.SET_INTERVAL_TYPE, setIntervalType),
		takeLatest(triggersActions.SET_ON_NEW_TYPE, setOnNewType),
		takeLatest(triggersActions.SET_ON_COMPLETE_TYPE, setOnCompleteType),
	]);
}
