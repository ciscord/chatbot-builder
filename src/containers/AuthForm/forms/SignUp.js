import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../../redux/auth/actions';
import { selectUI } from '../../../redux/auth/selectors';

import { signUpSchema } from '../../../utils/validators/auth';
import { UI_ROUTES } from '../../../constants/routes';

import { Input } from '../../../components/forms';

const initValues = {
	email: '',
	name: '',
	password: '',
	confirm: '',
	organizationName: '',
};

const SignUp = () => {

	const dispatch = useDispatch();
	const { signUpSuccess } = useSelector(selectUI);

	const onSubmit = useCallback((values, actions = null) => {
		dispatch(authActions.signUp(values));
		if (actions) {
			actions.setSubmitting(false);
		}
	}, [dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={signUpSchema}
			onSubmit={onSubmit}
			render={() => {
				return (
					<Form id="signUp-form">
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
							<div className="label">Name</div>
							<Field
								name="name"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="name"
										placeholder="Enter your Name"
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
						<div className="field">
							<div className="label">Organization Name</div>
							<Field
								name="organizationName"
								render={(fieldProps) => (
									<Input
										required
										autoComplete="organizationName"
										placeholder="Enter Organization Name"
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
								Sign Up
							</Button>
						</div>
						{signUpSuccess && (
							<div className="info">
								Verification code has been sent to your e-mail address. Please, check it to complete registration
							</div>
						)}
					</Form>
				);
			}}
		/>
	);
};

export default SignUp;
export { SignUp };
