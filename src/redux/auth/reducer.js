import Immutable from 'seamless-immutable';
import { authActions as actions } from './actions';

import CommonUtils from '../../utils/CommonUtils';

const initState = Immutable.from({
  user: {},

  UI: {
    signUpSuccess: false,
    sendVerifySuccess: false,
    sendResetSuccess: false,
  },
});

export default function authReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.PROFILE_REFRESH: {
      return Immutable.set(state, 'user', payload.user);
    }
    case actions.UI_MERGE: {
      const result = CommonUtils.safeMerge(state.UI, payload.UI);
      return Immutable.set(state, 'UI', result);
    }
    default: {
      return state;
    }
  }
}
