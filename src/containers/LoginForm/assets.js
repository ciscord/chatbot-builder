import firebase from 'firebase';

export const uiConfig = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      provider: 'microsoft.com',
      providerName: 'Microsoft',
      buttonColor: '#2F2F2F',
      iconUrl:
        'https://docs.microsoft.com/en-us/azure/active-directory/develop/media/howto-add-branding-in-azure-ad-apps/ms-symbollockup_mssymbol_19.png',
      loginHintKey: 'login_hint',
    },
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],

  credentialHelper: 'none',
  callbacks: {
    signInSuccess: () => false,
  },

  tosURL: 'https://www.skael.com/terms-of-service',
  privacyPolicyURL() {
    window.location.assign('https://www.skael.com/privacy-policy');
  },
};
