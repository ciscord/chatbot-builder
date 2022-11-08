import { all, takeLatest, put, call, select } from 'redux-saga/effects';

import { DataflowsService } from '../../services/DataflowsService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { outputsActions } from './actions';

function* systemOutputsReload() {
	const result = yield call(DataflowsService.getSystemOutputs);
	if (!result) {
		return;
	}

	const systemOutputs = AdaptUtils.adaptResponse(result);
	yield put(outputsActions.systemOutputsRefresh(systemOutputs));
}

export default function* outputsSaga() {
	yield all([
		takeLatest(outputsActions.SYSTEM_OUTPUTS_RELOAD, systemOutputsReload),
	]);
}
