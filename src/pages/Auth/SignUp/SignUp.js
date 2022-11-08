import React from 'react';

import { AuthForm } from '../../../containers/AuthForm';
import { FORM_TYPES } from '../../../constants/authForm';
import { Wrapper } from './SignUp.style';

const SignUp = () => {
  return (
    <Wrapper>
      <AuthForm type={FORM_TYPES.signUp} />
    </Wrapper>
  );
};

export default SignUp;
export { SignUp };
