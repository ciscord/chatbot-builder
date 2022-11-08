import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { TasksService } from '../../services/TasksService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { breadcrumbsActions } from './actions';
import { TASK_TYPES } from '../../constants/tasks';

function* dataFlowTasksListReload({ payload }) {
	const { projectID } = payload;
	const result = yield call(TasksService.list, projectID);
	if (!result) {
		yield put(breadcrumbsActions.dataFlowUIMerge({ projectID }));
		return;
	}

	const tasksList = AdaptUtils.adaptResponse(result);
	const filteredTasksList = tasksList.filter(task => task.type === TASK_TYPES.dataFlow);
	yield put(breadcrumbsActions.dataFlowUIMerge({
		projectID,
		tasksList: filteredTasksList,
		taskIDs: [],
	}));
}

export default function* breadcrumbsSaga() {
	yield all([
		takeLatest(breadcrumbsActions.DATA_FLOW_TASKS_LIST_RELOAD, dataFlowTasksListReload),
	]);
}
