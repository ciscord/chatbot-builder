import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Auth]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	LOGIN: `${prefix} login`,
	SIGN_UP: `${prefix} sign-up`,
	SEND_VERIFY_EMAIL: `${prefix} send-verify-email`,
	SEND_RESET_PASSWORD: `${prefix} send-reset-password`,
	VERIFY_USER: `${prefix} verify-user`,
	RESET_PASSWORD: `${prefix} reset-password`,
	LOGOUT: `${prefix} logout`,

	FIREBASE_LOGIN: `${prefix} firebase-login`,
	PROFILE_REFRESH: `${prefix} profile-refresh`,
	TOKEN_REFRESH: `${prefix} token-refresh`,

	UI_MERGE: `${prefix} ui-merge`,
};

export const authActions = {
	...TYPES,
	login: makeActionCreator(TYPES.LOGIN, 'credentials'),
	signUp: makeActionCreator(TYPES.SIGN_UP, 'credentials'),
	sendVerifyEmail: makeActionCreator(TYPES.SEND_VERIFY_EMAIL, 'email'),
	sendResetPassword: makeActionCreator(TYPES.SEND_RESET_PASSWORD, 'email'),
	verifyUser: makeActionCreator(TYPES.VERIFY_USER, 'token'),
	resetPassword: makeActionCreator(TYPES.RESET_PASSWORD, 'credentials'),
	logout: makeActionCreator(TYPES.LOGOUT),

	firebaseLogin: makeActionCreator(TYPES.FIREBASE_LOGIN, 'firebaseUser', 'firebaseInstance'),
	profileRefresh: makeActionCreator(TYPES.PROFILE_REFRESH, 'user'),
	tokenRefresh: makeActionCreator(TYPES.TOKEN_REFRESH),

	uiMerge: makeActionCreator(TYPES.UI_MERGE, 'UI'),
};
