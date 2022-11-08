import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { isArray, toInteger, find } from '../../lib/lodash';
import { NotificationUtils } from '../../utils/NotificationUtils';
import { AdaptUtils } from '../../utils/AdaptUtils';
import { DataFlowUtils } from '../../utils/DataFlowUtils';
import { DataflowsService } from '../../services/DataflowsService';

import { triggersActions } from '../triggers/actions';
import { flowActions } from '../flowActions/actions';
import { selectTrigger, selectUI as selectTriggerUI } from '../triggers/selectors';
import { selectActionsList, selectFunctionsList } from '../flowActions/selectors';
import { selectOutput } from '../outputs/selectors';
import { selectDataFlowUI } from '../breadcrumbs/selectors';

import { dataFlowActions } from './actions';
import { selectList, selectFlowByTaskID } from './selectors';
import { outputsActions } from '../outputs/actions';

function* listReload({ payload }) {
	const { projectID } = payload;

	const result = yield call(DataflowsService.list, projectID);
	if (!result) {
		return;
	}

	const list = AdaptUtils.adaptResponse(result);
	yield put(dataFlowActions.listRefresh(list));

	const { taskIDs } = yield select(selectDataFlowUI);
	if (isArray(taskIDs) && taskIDs.length) {
		const taskID = toInteger(taskIDs[0]);
		yield put(dataFlowActions.dataFlowParse(taskID));
	} else {
		yield put(dataFlowActions.dataFlowClear());
	}
}

function* dataFlowSave() {
	const { projectID, taskIDs } = yield select(selectDataFlowUI);
	if (!isArray(taskIDs) || !taskIDs.length) {
		NotificationUtils.warning('No selected Task', 'You did not select task yet');
		return;
	}
	const taskID = toInteger(taskIDs[0]);

	const { triggerType } = yield select(selectTriggerUI);
	if (!triggerType) {
		NotificationUtils.warning('No Trigger', 'You did not create trigger yet');
		return;
	}

	const trigger = yield select(selectTrigger);
	const actionsList = yield select(selectActionsList);
	const functionsList = yield select(selectFunctionsList);
	const output = yield select(selectOutput);

	const schema = yield call(DataFlowUtils.createSchema, taskID, trigger, actionsList, functionsList, output);

	const request = {
		schema,
		active: true,
	};

	const dataFlowsList = yield select(selectList);
	const existedFlow = find(dataFlowsList, { taskID });
	const flowID = existedFlow ? existedFlow.id : null;

	let result = null;
	if (!flowID) {
		request['task_id'] = taskID;
		result = yield call(DataflowsService.create, request);

	} else {
		result = yield call(DataflowsService.update, flowID, request);
	}

	if (!result) {
		return;
	}

	yield put(dataFlowActions.listReload(projectID));
	NotificationUtils.success('Success', 'Data Flow has been saved successfully');
}

function* dataFlowParse({ payload }) {
	const { taskID } = payload;
	const flow = yield select(selectFlowByTaskID(taskID));
	if (!flow) {
		yield put(dataFlowActions.dataFlowClear());
		return;
	}

	const { triggerData, actionsList, functionsList, output } = DataFlowUtils.parseSchema(flow.schema);

	yield put(flowActions.actionsListRefresh(actionsList));
	yield put(flowActions.functionsListRefresh(functionsList));
	yield put(outputsActions.outputRefresh(output));

	if (triggerData) {
		const { UI, trigger } = triggerData;
		yield put(triggersActions.uiMerge(UI));
		yield put(triggersActions.triggerRefresh(trigger));
	}
}

function* dataFlowClear() {
	yield all([
		yield put(triggersActions.reset()),
		yield put(flowActions.actionsListRefresh([])),
		yield put(flowActions.functionsListRefresh([])),
	]);
}

export default function* currentFunctionSaga() {
	yield all([
		takeLatest(dataFlowActions.LIST_RELOAD, listReload),
		takeLatest(dataFlowActions.DATA_FLOW_SAVE, dataFlowSave),
		takeLatest(dataFlowActions.DATA_FLOW_PARSE, dataFlowParse),
		takeLatest(dataFlowActions.DATA_FLOW_CLEAR, dataFlowClear),
	]);
}
