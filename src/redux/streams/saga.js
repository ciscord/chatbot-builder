import { all, takeLatest, put, select, call } from 'redux-saga/effects';

import { StreamsService } from '../../services/StreamsService';
import { AdaptUtils } from '../../utils/AdaptUtils';

import { streamsActions } from './actions';
import { selectByID } from './selectors';

function* listReload({ payload }) {
	const { projectID } = payload;

	const result = yield call(StreamsService.list, projectID);
	if (!result) {
		return;
	}

	const list = AdaptUtils.adaptResponse(result);
	yield put(streamsActions.listRefresh(list));
}

function* streamCreate({ payload }) {
	const { data } = payload;
	const { projectID } = data;

	const requestBody = AdaptUtils.adaptRequest(data);
	const result = yield call(StreamsService.create, requestBody);
	if (!result) {
		return;
	}

	yield put(streamsActions.listReload(projectID));
}

function* streamRemove({ payload }) {
	const { id } = payload;
	const stream = yield select(selectByID(id));

	const result = yield call(StreamsService.delete, id);
	if (!result) {
		return;
	}

	yield put(streamsActions.listReload(stream.projectID));
}

function* streamUpdate({ payload }) {
	const { id, data } = payload;
	const stream = yield select(selectByID(id));

	const resStream = {
		...stream,
		...data,
	};
	const requestBody = AdaptUtils.adaptRequest(resStream);

	const result = yield call(StreamsService.update, id, requestBody);
	if (!result) {
		return;
	}

	yield put(streamsActions.listReload(stream.projectID));
}

export default function* projectsSaga() {
	yield all([
		takeLatest(streamsActions.LIST_RELOAD, listReload),
		takeLatest(streamsActions.STREAM_CREATE, streamCreate),
		takeLatest(streamsActions.STREAM_REMOVE, streamRemove),
		takeLatest(streamsActions.STREAM_UPDATE, streamUpdate),
	]);
}
