import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { DataFlowUtils } from '../../utils/DataFlowUtils';
import { DataflowsService } from '../../services/DataflowsService';

import { selectTrigger } from '../triggers/selectors';
import { selectActionsList, selectFunctionsList } from '../flowActions/selectors';
import { currentFunctionActions } from './actions';

function* previewRequestSend({ payload }) {
	const { func } = payload;

	yield put(currentFunctionActions.previewResponseSet({
		result: { info: 'Loading data, please wait...' },
	}));

	const trigger = yield select(selectTrigger);
	const actionsList = yield select(selectActionsList);
	const functionsList = yield select(selectFunctionsList);

	const availableFunctionsList = [];
	let isFuncAdded = false;
	functionsList.forEach(f => {
		if (isFuncAdded) {
			return;
		}

		availableFunctionsList.push(f);
		if (f.id === func.id) {
			isFuncAdded = true;
		}
	});

	const dfSchema = DataFlowUtils.createSchema('', trigger, actionsList, availableFunctionsList, {});
	const requestData = {
		schema: {
			trigger: dfSchema.trigger,
			actions: dfSchema.actions,
			outputs: dfSchema.outputs,
		},
	};

	const result = yield call(DataflowsService.preview, requestData);
	if (!result) {
		yield put(currentFunctionActions.previewResponseSet({}));
		return;
	}

	yield put(currentFunctionActions.previewResponseSet(result));
}

export default function* currentFunctionSaga() {
	yield all([
		takeLatest(currentFunctionActions.PREVIEW_REQUEST_SEND, previewRequestSend),
	]);
}
