import Immutable from 'seamless-immutable';
import { dataFlowActions as actions } from './actions';

const initState = Immutable.from({
  list: [],
});

export default function dataFlowReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.LIST_REFRESH: {
      return Immutable.set(state, 'list', payload.list);
    }
    default: {
      return state;
    }
  }
}
