import Immutable from 'seamless-immutable';
import { flowActions as actions } from './actions';

const initState = Immutable.from({
  systemActions: {},
  actionsList: [],
  functionsList: [],
});

export default function flowActionsReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.SYSTEM_ACTIONS_REFRESH: {
      return Immutable.set(state, 'systemActions', payload.systemActions);
    }
    case actions.ACTIONS_LIST_REFRESH: {
      return Immutable.set(state, 'actionsList', payload.actionsList);
    }
    case actions.FUNCTIONS_LIST_REFRESH: {
      return Immutable.set(state, 'functionsList', payload.functionsList);
    }
    case actions.RESET: {
      return Immutable
        .set(state, 'actionsList', initState.actionsList)
        .set(state, 'functionsList', initState.functionsList);
    }
    default: {
      return state;
    }
  }
}
