import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { TasksService } from '../../services/TasksService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { selectProjectID } from '../router/selectors';

import { tasksActions } from './actions';
import { selectList } from './selectors';

function* listReload({ payload }) {
	const { projectID } = payload;

	const result = yield call(TasksService.list, projectID);
	if (!result) {
		return;
	}

	const list = AdaptUtils.adaptResponse(result);
	list.forEach(task => {
		if (task.assignees) {
			task.assignees = AdaptUtils.adaptResponse(task.assignees);
		}
	});

	yield put(tasksActions.listRefresh(list));
}

function* taskUpdate({ payload }) {
	const { id, data } = payload;
	const list = yield select(selectList);

	const resList = list.map(item => {
		if (item.id === id) {
			return {
				...item,
				...data,
			};
		}

		return item;
	});

	yield put(tasksActions.listRefresh(resList));
}

function* taskReorder({ payload }) {
	const { tasksList } = payload;
	const list = yield select(selectList);

	const orders = tasksList.reduce((result, task, index) => {
		const { id } = task;
		result[id] = index;

		return result;
	}, {});

	const resList = list.map(item => {
		const { id } = item;
		const newOrder = orders[id];
		if (!newOrder) {
			return item;
		}

		return {
			...item,
			order: newOrder,
		};
	});

	yield put(tasksActions.listRefresh(resList));
}

function* taskRemove({ payload }) {
	const { id } = payload;

	const result = yield call(TasksService.delete, id);
	if (!result) {
		return;
	}

	const projectID = yield select(selectProjectID);
	if (projectID) {
		yield put(tasksActions.listReload(projectID));
	}
}

function* taskMove({ payload }) {
	const { id, streamID } = payload;

	const result = yield call(TasksService.move, id, streamID);
	if (!result) {
		return;
	}

	const projectID = yield select(selectProjectID);
	if (projectID) {
		yield put(tasksActions.listReload(projectID));
	}
}

export default function* tasksSaga() {
	yield all([
		takeLatest(tasksActions.LIST_RELOAD, listReload),
		takeLatest(tasksActions.TASK_UPDATE, taskUpdate),
		takeLatest(tasksActions.TASK_REORDER, taskReorder),
		takeLatest(tasksActions.TASK_REMOVE, taskRemove),
		takeLatest(tasksActions.TASK_MOVE, taskMove),
	]);
}
