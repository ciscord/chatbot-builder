import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../../redux/auth/actions';
import { selectUI } from '../../../redux/auth/selectors';
import { sendVerifySchema } from '../../../utils/validators/auth';
import { UI_ROUTES } from '../../../constants/routes';

import { Input } from '../../../components/forms';

const initValues = {
	email: '',
};

const SendVerify = () => {

	const dispatch = useDispatch();
	const { sendVerifySuccess } = useSelector(selectUI);

	const onSubmit = useCallback((values, actions = null) => {
		const { email } = values;
		dispatch(authActions.sendVerifyEmail(email));
		if (actions) {
			actions.setSubmitting(false);
		}
	}, [dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={sendVerifySchema}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<Form id="verify-form">
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
						<div className="footer">
							<NavLink to={UI_ROUTES.login}>Log In</NavLink>
							<Button
								htmlType="submit"
								type="primary"
							>
								Send
							</Button>
						</div>
						{sendVerifySuccess && (
							<div className="info">
								Verification code has been sent to your e-mail address. Please, check it to complete registration
							</div>
						)}
					</Form>
				);
			}}
		</Formik>
	);
};

export default SendVerify;
export { SendVerify };
