import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { DataflowsService } from '../../services/DataflowsService';
import { currentTriggerActions } from './actions';
import DataFlowUtils from '../../utils/DataFlowUtils';

function* previewRequestSend({ payload }) {
	const { trigger } = payload;

	yield put(currentTriggerActions.previewResponseSet({
		result: { info: 'Loading data, please wait...' },
	}));

	const triggerData = DataFlowUtils.createSchema('', trigger, [], []);
	const requestData = {
		schema: {
			trigger: triggerData.trigger,
		},
	};

	const result = yield call(DataflowsService.preview, requestData);
	if (!result) {
		yield put(currentTriggerActions.previewResponseSet({}));
		return;
	}

	yield put(currentTriggerActions.previewResponseSet(result));
}

export default function* currentTriggerSaga() {
	yield all([
		takeLatest(currentTriggerActions.PREVIEW_REQUEST_SEND, previewRequestSend),
	]);
}
