import Immutable from 'seamless-immutable';

import { modalsActions as actions } from './actions';

const initState = Immutable.from({
  newProjectVisible: false,
  taskVisible: false,
  triggerVisible: false,
  functionVisible: false,
  outputVisible: false,
});

export default function modalsReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.NEW_PROJECT_SHOW: {
      return Immutable.set(state, 'newProjectVisible', true);
    }
    case actions.NEW_PROJECT_HIDE: {
      return Immutable.set(state, 'newProjectVisible', false);
    }
    case actions.TASK_SHOW: {
      return Immutable.set(state, 'taskVisible', true);
    }
    case actions.TASK_HIDE: {
      return Immutable.set(state, 'taskVisible', false);
    }
    case actions.TRIGGER_SHOW: {
      return Immutable.set(state, 'triggerVisible', true);
    }
    case actions.TRIGGER_HIDE: {
      return Immutable.set(state, 'triggerVisible', false);
    }
    case actions.FUNCTION_SHOW: {
      return Immutable.set(state, 'functionVisible', true);
    }
    case actions.FUNCTION_HIDE: {
      return Immutable.set(state, 'functionVisible', false);
    }
    case actions.OUTPUT_SHOW: {
      return Immutable.set(state, 'outputVisible', true);
    }
    case actions.OUTPUT_HIDE: {
      return Immutable.set(state, 'outputVisible', false);
    }
    default: {
      return state;
    }
  }
}
