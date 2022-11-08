import { all, takeLatest, put, call, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import { appActions } from '../app/actions';
import { authActions } from './actions';
import { selectIsLoginPage } from '../router/selectors';
import { selectFirebaseInstance } from '../firebase/selectors';

import { AuthService } from '../../services/AuthService';
import { UsersService } from '../../services/UsersService';
import { StorageUtils } from '../../utils/StorageUtils';
import { UI_ROUTES } from '../../constants/routes';

import { AdaptUtils } from '../../utils/AdaptUtils';

function* login({ payload }) {
	const { credentials } = payload;

	const loginResult = yield call(AuthService.login, credentials);
	if (!loginResult) {
		return;
	}

	const tokens = AdaptUtils.adaptResponse(loginResult);
	StorageUtils.storeAccessToken(tokens.accessToken);
	StorageUtils.storeRefreshToken(tokens.refreshToken);

	const userResult = yield call(AuthService.getProfile);
	if (!userResult) {
		return;
	}
	const user = AdaptUtils.adaptResponse(userResult);

	yield put(authActions.profileRefresh(user));
	yield put(appActions.loadCommonData());
	yield put(push(UI_ROUTES.root));
}

function* signUp({ payload }) {
	yield put(authActions.uiMerge({ signUpSuccess: false }));

	const { credentials } = payload;
	const requestBody = {
		email: credentials.email,
		name: credentials.name,
		password: credentials.password,
		confirm: credentials.confirm,
		organization_name: credentials.organizationName,
	};

	const result = yield call(UsersService.signUp, requestBody);
	if (!result) {
		return;
	}

	yield put(authActions.uiMerge({ signUpSuccess: true }));
}

function* sendVerifyEmail({ payload }) {
	yield put(authActions.uiMerge({ sendVerifySuccess: false }));

	const { email } = payload;

	const result = yield call(UsersService.sendVerify, email);
	if (!result) {
		return;
	}

	yield put(authActions.uiMerge({ sendVerifySuccess: true }));
}

function* sendResetPassword({ payload }) {
	yield put(authActions.uiMerge({ sendVerifySuccess: false }));

	const { email } = payload;

	const result = yield call(UsersService.sendReset, email);
	if (!result) {
		return;
	}

	yield put(authActions.uiMerge({ sendResetSuccess: true }));
}

function* verifyUser({ payload }) {
	const { token } = payload;

	const result = yield call(UsersService.verify, token);
	if (!result) {
		return;
	}

	yield put(push(UI_ROUTES.login));
}

function* resetPassword({ payload }) {
	yield put(authActions.uiMerge({ sendVerifySuccess: false }));

	const { credentials } = payload;

	const result = yield call(UsersService.resetPassword, credentials);
	if (!result) {
		return;
	}

	yield put(push(UI_ROUTES.login));
}

function* tokenRefresh() {
	const refreshToken = StorageUtils.restoreRefreshToken();
	if (!refreshToken) {
		yield put(authActions.logout());
		return;
	}

	const result = yield call(AuthService.refreshToken, refreshToken);
	if (!result) {
		yield put(authActions.logout());
		return;
	}

	const tokens = AdaptUtils.adaptResponse(result);
	StorageUtils.storeAccessToken(tokens.accessToken);
	StorageUtils.storeRefreshToken(tokens.refreshToken);

	const userResult = yield call(AuthService.getProfile);
	if (!userResult) {
		return;
	}
	const user = AdaptUtils.adaptResponse(userResult);

	yield put(authActions.profileRefresh(user));
	yield put(push(UI_ROUTES.root));
}

function* logout() {
	StorageUtils.clearTokens();

	yield put(authActions.profileRefresh({}));
	yield put(appActions.appStarted());

	yield put(push(UI_ROUTES.login));
}

export default function* authSaga() {
	yield all([
		takeLatest(authActions.LOGIN, login),
		takeLatest(authActions.SIGN_UP, signUp),
		takeLatest(authActions.LOGOUT, logout),

		takeLatest(authActions.SEND_VERIFY_EMAIL, sendVerifyEmail),
		takeLatest(authActions.SEND_RESET_PASSWORD, sendResetPassword),
		takeLatest(authActions.VERIFY_USER, verifyUser),
		takeLatest(authActions.RESET_PASSWORD, resetPassword),

		takeLatest(authActions.TOKEN_REFRESH, tokenRefresh),
	]);
}
