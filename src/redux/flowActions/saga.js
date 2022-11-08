import { all, takeLatest, put, call, select } from 'redux-saga/effects';

import { findIndex } from '../../lib/lodash';
import { DataflowsService } from '../../services/DataflowsService';
import { AdaptUtils } from '../../utils/AdaptUtils';
import { CommonUtils } from '../../utils/CommonUtils';

import { flowActions } from './actions';
import { selectActionsList, selectFunctionsList } from './selectors';

function* systemActionsReload() {
	const result = yield call(DataflowsService.getSystemActions);
	if (!result) {
		return;
	}

	const systemActions = AdaptUtils.adaptResponse(result);
	yield put(flowActions.systemActionsRefresh(systemActions));
}

function* actionCreate({ payload }) {
	const { type } = payload;

	const actionsList = yield select(selectActionsList);
	const resList = [...actionsList].concat({
		id: CommonUtils.newID(),
		type,
	});

	yield put(flowActions.actionsListRefresh(resList));
}

function* actionRemove({ payload }) {
	const { id } = payload;

	const actionsList = yield select(selectActionsList);
	const resList = actionsList.filter(action => action.id !== id);

	yield put(flowActions.actionsListRefresh(resList));
}

function* functionUpdate({ payload }) {
	const { functionData } = payload;
	const { id } = functionData;

	const functionsList = yield select(selectFunctionsList);
	const resFunctionList = [...functionsList];

	const existedFunctionID = findIndex(resFunctionList, { id });
	if (existedFunctionID > -1) {
		resFunctionList[existedFunctionID] = functionData;

	} else {
		resFunctionList.push(functionData);
	}

	yield put(flowActions.functionsListRefresh(resFunctionList));
}

function* functionRemove({ payload }) {
	const { id } = payload;

	const functionsList = yield select(selectFunctionsList);
	const resFunctionList = functionsList.filter(item => item.id !== id);

	yield put(flowActions.functionsListRefresh(resFunctionList));
}

export default function* flowActionsSaga() {
	yield all([
		takeLatest(flowActions.SYSTEM_ACTIONS_RELOAD, systemActionsReload),
		takeLatest(flowActions.ACTION_CREATE, actionCreate),
		takeLatest(flowActions.ACTION_REMOVE, actionRemove),

		takeLatest(flowActions.FUNCTION_UPDATE, functionUpdate),
		takeLatest(flowActions.FUNCTION_REMOVE, functionRemove),
	]);
}
