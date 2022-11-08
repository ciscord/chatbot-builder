import { createSelector } from 'reselect';

import { UI_ROUTES } from '../../constants/routes';
import { RouterUtils } from '../../utils/RouterUtils';
import { toInteger } from '../../lib/lodash';

const location = ({ router }) => router.location;

export const selectLocation = createSelector(
	[location],
	(location) => location,
);

export const selectIsLoginPage = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.login);
	},
);

export const selectIsSignUpPage = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.signUp);
	},
);

export const selectIsVerifyPage = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.verifyUser);
	},
);

export const selectIsSendVerify = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.sendVerify);
	},
);

export const selectIsSendReset = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.sendReset);
	},
);

export const selectIsResetPassword = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return pathname.includes(UI_ROUTES.resetPassword);
	},
);

export const selectIsPublicRoute = createSelector(
	[
		selectIsLoginPage,
		selectIsSignUpPage,
		selectIsVerifyPage,
		selectIsSendVerify,
		selectIsSendReset,
		selectIsResetPassword,
	],
	(isLogin, isSignUp, isVerify, isSendVerify, isSendReset, isResetPassword) => {
		return (isLogin || isSignUp || isVerify || isSendVerify || isSendReset || isResetPassword);
	},
);

export const selectUIRoute = createSelector(
	[selectLocation],
	(location) => {
		const { pathname } = location;
		return RouterUtils.getUIRoute(pathname);
	},
);

export const selectProjectID = createSelector(
	[location],
	(location) => {
		const { pathname } = location;
		if (!pathname.includes(UI_ROUTES.projects)) {
			return null;
		}

		const projectID = pathname.replace(`${UI_ROUTES.projects}/`, '');
		return toInteger(projectID);
	},
);

export const selectVerificationToken = createSelector(
	[location],
	(location) => {
		const { pathname } = location;
		if (!pathname.includes(UI_ROUTES.verifyUser)) {
			return null;
		}

		return pathname.replace(`${UI_ROUTES.verifyUser}/`, '');
	},
);

export const selectResetPasswordToken = createSelector(
	[location],
	(location) => {
		const { pathname } = location;
		if (!pathname.includes(UI_ROUTES.resetPassword)) {
			return null;
		}

		return pathname.replace(`${UI_ROUTES.resetPassword}/`, '');
	},
);
