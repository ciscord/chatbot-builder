import { all, takeLatest, put, call, select } from 'redux-saga/effects';

import { StorageUtils } from '../../utils/StorageUtils';
import { AdaptUtils } from '../../utils/AdaptUtils';
import { AuthService } from '../../services/AuthService';
import { selectIsPublicRoute } from '../router/selectors';

import { authActions } from '../auth/actions';
import { usersActions } from '../users/actions';
import { projectsActions } from '../projects/actions';
import { triggersActions } from '../triggers/actions';
import { flowActions } from '../flowActions/actions';
import { outputsActions } from '../outputs/actions';
import { appActions } from './actions';

function* appStart() {
	yield put(appActions.uiMerge({ loading: true }));

	const isPublicRoute = yield select(selectIsPublicRoute);
	if (isPublicRoute) {
		yield put(appActions.appStarted());
		yield put(appActions.uiMerge({ loading: false }));
		return;
	}

	const accessToken = StorageUtils.restoreAccessToken();
	if (!accessToken) {
		yield put(appActions.appStarted());
		yield put(appActions.uiMerge({ loading: false }));
		return;
	}

	const result = yield call(AuthService.getProfile);
	if (!result) {
		yield put(appActions.appStarted());
		yield put(appActions.uiMerge({ loading: false }));
		return;
	}

	const user = AdaptUtils.adaptResponse(result);
	yield put(authActions.profileRefresh(user));

	yield put(appActions.appStarted());
	yield put(appActions.uiMerge({ loading: false }));

	yield put(appActions.loadCommonData());
}

function* loadCommonData() {
	yield all([
		yield put(usersActions.listReload()),
		yield put(projectsActions.listReload()),
		yield put(triggersActions.systemTriggersReload()),
		yield put(flowActions.systemActionsReload()),
		yield put(outputsActions.systemOutputsReload()),
	]);
}

export default function* appSaga() {
	yield all([
		takeLatest(appActions.APP_START, appStart),
		takeLatest(appActions.LOAD_COMMON_DATA, loadCommonData),
	]);
}
