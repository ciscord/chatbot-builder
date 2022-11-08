import React from 'react';
import LogoImg from '../../images/logo.svg';

import { Wrapper } from './Logo.style';

const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoImg} alt="logo" />
    </Wrapper>
  );
};

export default Logo;
export { Logo };
