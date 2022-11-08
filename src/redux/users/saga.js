import { all, takeLatest, put, call } from 'redux-saga/effects';

import { UsersService } from '../../services/UsersService';
import { usersActions } from './actions';

function* listReload() {

	const list = yield call(UsersService.list);
	if (!list) {
		return;
	}

	yield put(usersActions.listRefresh(list));
}

export default function* usersSaga() {
	yield all([
		takeLatest(usersActions.LIST_RELOAD, listReload),
	]);
}
