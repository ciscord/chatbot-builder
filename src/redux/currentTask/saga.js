import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { TasksService } from '../../services/TasksService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { modalsActions } from '../modals/actions';
import { tasksActions } from '../tasks/actions';
import { breadcrumbsActions } from '../breadcrumbs/actions';
import { selectUser } from '../auth/selectors';
import { selectProjectID } from '../router/selectors';
import { selectDataFlowUI } from '../breadcrumbs/selectors';

import { currentTaskActions } from './actions';
import { selectBaseData, selectUI } from './selectors';
import { cleanTaskBaseData } from './assets';

function* baseDataReload({ payload }) {
	const { id } = payload;

	yield put(currentTaskActions.uiMerge({ loading: true }));

	const result = yield call(TasksService.entity, id);
	if (!result) {
		return;
	}

	const baseData = AdaptUtils.adaptResponse(result);
	yield put(currentTaskActions.baseDataRefresh(baseData));

	yield put(currentTaskActions.uiMerge({ loading: false }));
}

function* baseDataUpdate({ payload }) {
	const { baseData } = payload;

	yield put(currentTaskActions.uiMerge({ loading: true }));

	const user = yield select(selectUser);
	const currentData = yield select(selectBaseData);

	const projectID = yield select(selectProjectID);
	const { streamID } = yield select(selectUI);

	const { id } = currentData;
	const timeline = baseData.timeline || [];
	const timelineStart = timeline[0] ? timeline[0].format('YYYY-MM-DD') : null;
	const timelineEnd = timeline[1] ? timeline[1].format('YYYY-MM-DD') : null;

	const resBaseData = cleanTaskBaseData({
		...currentData,
		...baseData,
		streamID,
		timelineStart,
		timelineEnd,
		createdBy: currentData.createdBy || user.id,
	});
	const requestBody = AdaptUtils.adaptRequest(resBaseData);

	if (id) {
		yield call(TasksService.update, id, requestBody);

	} else {
		const result = yield call(TasksService.create, requestBody);
		if (!result) {
			yield put(currentTaskActions.uiMerge({ loading: false }));
			return;
		}
	}

	yield put(modalsActions.taskHide());
	yield put(currentTaskActions.reset());
	yield put(tasksActions.listReload(projectID));

	const { projectID: dataFlowProjectID } = yield select(selectDataFlowUI);
	if (projectID === dataFlowProjectID) {
		yield put(breadcrumbsActions.dataFlowTasksListReload(projectID));
	}
}

export default function* currentTaskSaga() {
	yield all([
		takeLatest(currentTaskActions.BASE_DATA_RELOAD, baseDataReload),
		takeLatest(currentTaskActions.BASE_DATA_UPDATE, baseDataUpdate),
	]);
}
