import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../../redux/auth/actions';
import { selectResetPasswordToken } from '../../../redux/router/selectors';
import { resetPassword } from '../../../utils/validators/auth';
import { UI_ROUTES } from '../../../constants/routes';

import { Input } from '../../../components/forms';

const initValues = {
	password: '',
	confirm: '',
};

const ResetPassword = () => {

	const dispatch = useDispatch();
	const token = useSelector(selectResetPasswordToken);

	const onSubmit = useCallback((values, actions = null) => {
		dispatch(authActions.resetPassword({
			...values,
			token,
		}));
		if (actions) {
			actions.setSubmitting(false);
		}
	}, [dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={resetPassword}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<Form id="reset-form">
						<div className="field">
							<div className="label">New Password</div>
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
						<div className="field">
							<div className="label">Confirm Password</div>
							<Field
								name="confirm"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="confirmPassword"
										type="password"
										placeholder="Confirm your Password"
										{...fieldProps}
									/>
								)}
							/>
						</div>
						<div className="footer">
							<NavLink to={UI_ROUTES.login}>Log In</NavLink>
							<Button
								htmlType="submit"
								type="primary"
							>
								Send
							</Button>
						</div>
					</Form>
				);
			}}
		</Formik>
	);
};

export default ResetPassword;
export { ResetPassword };
