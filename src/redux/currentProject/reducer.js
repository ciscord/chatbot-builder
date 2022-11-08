import Immutable from 'seamless-immutable';

import { currentProjectActions as actions } from './actions';

const initState = Immutable.from({
  baseData: {
    id: null,
    name: '',
  },
});

export default function currentProjectReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.BASE_DATA_REFRESH: {
      return Immutable.set(state, 'baseData', payload.baseData);
    }
    default: {
      return state;
    }
  }
}
