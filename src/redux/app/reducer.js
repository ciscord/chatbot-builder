import Immutable from 'seamless-immutable';

import CommonUtils from '../../utils/CommonUtils';
import { appActions as actions } from './actions';

const initState = Immutable.from({
  appStarted: false,
  UI: {
    loading: false,
  },
});

export default function appReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.APP_STARTED: {
      return Immutable.set(state, 'appStarted', true);
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
