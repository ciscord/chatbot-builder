import Immutable from 'seamless-immutable';

import CommonUtils from '../../utils/CommonUtils';
import { currentTaskActions as actions } from './actions';
import { initBaseData } from './assets';

const initState = Immutable.from({
  baseData: {
    ...initBaseData,
  },
  UI: {
    streamID: null,
    loading: false,
  },
});

export default function currentProjectReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.BASE_DATA_REFRESH: {
      const result = CommonUtils.safeMerge(state.baseData, payload.baseData);
      return Immutable.set(state, 'baseData', result);
    }
    case actions.UI_MERGE: {
      const result = CommonUtils.safeMerge(state.UI, payload.UI);
      return Immutable.set(state, 'UI', result);
    }
    case actions.RESET: {
      return initState;
    }
    default: {
      return state;
    }
  }
}
