import React from 'react';
import * as PropTypes from 'prop-types';

import { Button } from './EmailButton.style';

const EmailButton = ({ onClick }) => {

  return (
    <Button onClick={onClick}>
      <span className="firebaseui-idp-icon-wrapper">
        <img
          className="firebaseui-idp-icon"
          alt=""
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/mail.svg"
        />
      </span>
      <span className="firebaseui-idp-text firebaseui-idp-text-long">
        Sign in with email
      </span>
    </Button>
  );
};

EmailButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EmailButton;
export { EmailButton };
