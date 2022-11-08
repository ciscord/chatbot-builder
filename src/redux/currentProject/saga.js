import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { ProjectsService } from '../../services/ProjectsService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { currentProjectActions } from './actions';
import { selectBaseData } from './selectors';

function* baseDataReload({ payload }) {
	const { id } = payload;
	const result = yield call(ProjectsService.entity, id);
	if (!result) {
		return;
	}

	const baseData = AdaptUtils.adaptResponse(result);
	if (baseData.assignees) {
		baseData.assignees = AdaptUtils.adaptResponse(baseData.assignees);
	}

	yield put(currentProjectActions.baseDataRefresh(baseData));
}

function* baseDataUpdate({ payload }) {
	const { baseData } = payload;

	const currentData = yield select(selectBaseData);
	const { id } = currentData;

	const resBaseData = {
		...currentData,
		...baseData,
	};

	const requestBody = AdaptUtils.adaptRequest(resBaseData);

	yield call(ProjectsService.update, id, requestBody);
	yield put(currentProjectActions.baseDataReload(id));
}

export default function* currentProjectSaga() {
	yield all([
		takeLatest(currentProjectActions.BASE_DATA_RELOAD, baseDataReload),
		takeLatest(currentProjectActions.BASE_DATA_UPDATE, baseDataUpdate),
	]);
}
