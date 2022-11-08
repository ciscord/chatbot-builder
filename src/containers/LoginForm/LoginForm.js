import React, { useState, useCallback } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { useSelector } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';
import { Typography } from 'antd';

import { selectFirebaseInstance } from '../../redux/firebase/selectors';

import { EmailButton } from './EmailButton';
import { CredentialsForm } from './CredentialsForm';

import { uiConfig } from './assets';
import { Wrapper } from './LoginForm.style';

const { Title, Text } = Typography;

const LoginForm = () => {

  const firebaseInstance = useSelector(selectFirebaseInstance);
  const [showCredentialsForm, setShowCredentialsForm] = useState(false);

  const onClickEmail = useCallback(() => {
    setShowCredentialsForm(true);
  }, [setShowCredentialsForm]);

  return (
    <Wrapper>
      <BrowserView>
        <div className="title">
          <Title level={3}>Hydra Demo</Title>
          <Text type="secondary">by SKAEL</Text>
        </div>
        <div className="form">
          {!showCredentialsForm && (
            <>
              <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebaseInstance.auth()}
              />
              <EmailButton onClick={onClickEmail} />
            </>
          )}
          {showCredentialsForm && (
            <CredentialsForm />
          )}
        </div>
      </BrowserView>
      <MobileView>
        <Title level={4}>SKAEL&apos;s Hydra Demo is best viewed on a desktop</Title>
        <Text type="secondary">Please check back in later while we get the demo mobile ready.</Text>
      </MobileView>
    </Wrapper>
  );
};

export default LoginForm;
export { LoginForm };
