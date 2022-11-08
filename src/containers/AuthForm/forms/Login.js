import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../../redux/auth/actions';
import { loginSchema } from '../../../utils/validators/auth';
import { UI_ROUTES } from '../../../constants/routes';

import { Input } from '../../../components/forms';

const initValues = {
	email: '',
	password: '',
};

const Login = () => {

	const dispatch = useDispatch();

	const onSubmit = useCallback((values, actions = null) => {
		dispatch(authActions.login(values));
		if (actions) {
			actions.setSubmitting(false);
		}
	}, [dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={loginSchema}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<Form id="login-form">
						<div className="field">
							<div className="label">E-mail</div>
							<Field
								name="email"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="email"
										placeholder="Enter your E-mail"
										{...fieldProps}
									/>
								)}
							/>
						</div>
						<div className="field">
							<div className="label">Password</div>
							<Field
								name="password"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="password"
										type="password"
										placeholder="Enter your Password"
										{...fieldProps}
									/>
								)}
							/>
						</div>
						<div className="footer">
							<NavLink to={UI_ROUTES.signUp}>Sign Up</NavLink>
							<Button
								htmlType="submit"
								type="primary"
							>
								Log In
							</Button>
						</div>
						<div className="links">
							Forgot password or did not receive verifying E-mail?
							You can <NavLink to={UI_ROUTES.sendReset}>reset password</NavLink> or <NavLink to={UI_ROUTES.sendVerify}>send verifying E-mail</NavLink> again
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default Login;
export { Login };
