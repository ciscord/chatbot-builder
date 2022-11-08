import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Button } from 'antd';

import { authActions } from '../../../redux/auth/actions';
import { loginSchema } from '../../../utils/validators/auth';

import { Input } from '../../../components/forms';

import { Wrapper } from './CredentialsForm.style';

const initValues = {
  email: '',
  password: '',
};

const CredentialsForm = () => {

  const dispatch = useDispatch();

  const onSubmit = useCallback((values, actions = null) => {
    dispatch(authActions.login(values));
    if (actions) {
      actions.setSubmitting(false);
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <Formik
        enableReinitialize
        initialValues={initValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        render={() => {
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
                <Button
                  htmlType="submit"
                  type="primary"
                >
                  Log In
                </Button>
              </div>
            </Form>
          );
        }}
      />
    </Wrapper>
  );
};

export default CredentialsForm;
export { CredentialsForm };
