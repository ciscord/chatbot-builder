import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

import { authActions } from '../../../redux/auth/actions';
import { selectUI } from '../../../redux/auth/selectors';
import { sendResetSchema } from '../../../utils/validators/auth';
import { UI_ROUTES } from '../../../constants/routes';

import { Input } from '../../../components/forms';

const initValues = {
	email: '',
};

const SendReset = () => {

	const dispatch = useDispatch();
	const { sendResetSuccess } = useSelector(selectUI);

	const onSubmit = useCallback((values, actions = null) => {
		const { email } = values;
		dispatch(authActions.sendResetPassword(email));
		if (actions) {
			actions.setSubmitting(false);
		}
	}, [dispatch]);

	return (
		<Formik
			enableReinitialize
			initialValues={initValues}
			validationSchema={sendResetSchema}
			onSubmit={onSubmit}
		>
			{() => {
				return (
					<Form id="reset-form">
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
						{sendResetSuccess && (
							<div className="info">
								The confirmation email has been sent to your e-mail address. Please, check it to complete resetting
							</div>
						)}
					</Form>
				);
			}}
		</Formik>
	);
};

export default SendReset;
export { SendReset };
