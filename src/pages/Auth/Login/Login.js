import React from 'react';

import { AuthForm } from '../../../containers/AuthForm';
import { FORM_TYPES } from '../../../constants/authForm';
import { Wrapper } from './Login.style';

const Login = () => {
  return (
    <Wrapper>
      <AuthForm type={FORM_TYPES.login} />
    </Wrapper>
  );
};

export default Login;
export { Login };
