import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { DataFlowUtils } from '../../utils/DataFlowUtils';
import { DataflowsService } from '../../services/DataflowsService';
import { selectTrigger } from '../triggers/selectors';
import { selectActionsList, selectFunctionsList } from '../flowActions/selectors';
import { currentOutputActions } from './actions';

function* previewRequestSend({ payload }) {
	const { output } = payload;

	yield put(currentOutputActions.previewResponseSet({
		result: { info: 'Loading data, please wait...' },
	}));

	const trigger = yield select(selectTrigger);
	const actionsList = yield select(selectActionsList);
	const functionsList = yield select(selectFunctionsList);

	const dfSchema = DataFlowUtils.createSchema('', trigger, actionsList, functionsList, output);
	const requestData = {
		schema: {
			trigger: dfSchema.trigger,
			actions: dfSchema.actions,
			outputs: dfSchema.outputs,
		},
	};

	const result = yield call(DataflowsService.preview, requestData);
	if (!result) {
		yield put(currentOutputActions.previewResponseSet({}));
		return;
	}

	yield put(currentOutputActions.previewResponseSet(result));
}

export default function* currentOutputSaga() {
	yield all([
		takeLatest(currentOutputActions.PREVIEW_REQUEST_SEND, previewRequestSend),
	]);
}
