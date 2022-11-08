import React from 'react';

import { AuthForm } from '../../../containers/AuthForm';
import { FORM_TYPES } from '../../../constants/authForm';
import { Wrapper } from './SendReset.style';

const SendReset = () => {
  return (
    <Wrapper>
      <AuthForm type={FORM_TYPES.sendReset} />
    </Wrapper>
  );
};

export default SendReset;
export { SendReset };
