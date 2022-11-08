import React from 'react';
import * as PropTypes from 'prop-types';
import { Typography } from 'antd';

import { FORM_TYPES } from '../../constants/authForm';

import { Login } from './forms/Login';
import { SignUp } from './forms/SignUp';
import { SendVerify } from './forms/SendVerify';
import { SendReset } from './forms/SendReset';
import { ResetPassword } from './forms/ResetPassword';
import { Wrapper } from './AuthForm.style';

const { Title, Text } = Typography;

const forms = {
	[FORM_TYPES.login]: <Login />,
	[FORM_TYPES.signUp]: <SignUp />,
	[FORM_TYPES.sendVerify]: <SendVerify />,
	[FORM_TYPES.sendReset]: <SendReset />,
	[FORM_TYPES.resetPassword]: <ResetPassword />,
};

const AuthForm = ({ type }) => {

	return (
		<Wrapper>
			<div className="title">
				<Title level={3}>Hydra Demo</Title>
				<Text type="secondary">by SKAEL</Text>
			</div>
			<div className="form">
				{forms[type]}
			</div>

		</Wrapper>
	);
};

AuthForm.propTypes = {
	type: PropTypes.oneOf([
		FORM_TYPES.login,
		FORM_TYPES.signUp,
		FORM_TYPES.sendVerify,
		FORM_TYPES.sendReset,
		FORM_TYPES.resetPassword,
	]),
};

AuthForm.defaultProps = {
	type: FORM_TYPES.login,
};

export default AuthForm;
export { AuthForm };
