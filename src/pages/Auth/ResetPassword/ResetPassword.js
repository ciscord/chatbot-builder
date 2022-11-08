import React from 'react';

import { AuthForm } from '../../../containers/AuthForm';
import { FORM_TYPES } from '../../../constants/authForm';
import { Wrapper } from './ResetPassword.style';

const ResetPassword = () => {
  return (
    <Wrapper>
      <AuthForm type={FORM_TYPES.resetPassword} />
    </Wrapper>
  );
};

export default ResetPassword;
export { ResetPassword };
