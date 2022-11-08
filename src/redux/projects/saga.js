import { all, takeLatest, put, select, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { ProjectsService } from '../../services/ProjectsService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { modalsActions } from '../modals/actions';
import { projectsActions } from './actions';
import { selectList } from './selectors';
import { UI_ROUTES } from '../../constants/routes';

function* listReload() {
	const result = yield call(ProjectsService.list);
	if (!result) {
		return;
	}

	const list = AdaptUtils.adaptResponse(result);
	yield put(projectsActions.listRefresh(list));
}

function* projectCreate({ payload }) {
	const { data } = payload;

	const requestBody = AdaptUtils.adaptRequest(data);
	const result = yield call(ProjectsService.create, requestBody);
	if (!result) {
		return;
	}

	yield put(modalsActions.newProjectHide());

	const url = `${UI_ROUTES.projects}/${result.id}`;
	yield put(push(url));
}

function* projectRemove({ payload }) {
	const { id } = payload;
	const result = yield call(ProjectsService.delete, id);
	if (!result) {
		return;
	}

	yield put(projectsActions.listReload());
}

function* projectUpdate({ payload }) {
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

	yield put(projectsActions.listRefresh(resList));
}

export default function* projectsSaga() {
	yield all([
		takeLatest(projectsActions.LIST_RELOAD, listReload),
		takeLatest(projectsActions.PROJECT_CREATE, projectCreate),
		takeLatest(projectsActions.PROJECT_REMOVE, projectRemove),
		takeLatest(projectsActions.PROJECT_UPDATE, projectUpdate),
	]);
}
