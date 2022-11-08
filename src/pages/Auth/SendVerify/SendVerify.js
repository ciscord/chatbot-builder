import React from 'react';

import { AuthForm } from '../../../containers/AuthForm';
import { FORM_TYPES } from '../../../constants/authForm';
import { Wrapper } from './SendVerify.style';

const SendVerify = () => {
  return (
    <Wrapper>
      <AuthForm type={FORM_TYPES.sendVerify} />
    </Wrapper>
  );
};

export default SendVerify;
export { SendVerify };
