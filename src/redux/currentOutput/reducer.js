import Immutable from 'seamless-immutable';

import { CommonUtils } from '../../utils/CommonUtils';
import { currentOutputActions as actions } from './actions';

const initState = Immutable.from({
  baseData: {
    systemType: '',
    inputs: {},
    outputs: {},
  },
  preview: {},
});

export default function currentTriggerReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.BASE_DATA_REFRESH: {
      const result = CommonUtils.safeMerge(state.baseData, payload.baseData);
      return Immutable.set(state, 'baseData', result);
    }
    case actions.PREVIEW_RESPONSE_SET: {
      return Immutable.set(state, 'preview', payload.preview);
    }
    case actions.RESET: {
      return initState;
    }
    default: {
      return state;
    }
  }
}
