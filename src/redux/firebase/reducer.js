import { firebaseActions as actions } from './actions';

const initState = {
  instance: null,
  inUse: false,
};

export default function firebaseReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.SET_INSTANCE: {
      return {
        ...state,
        instance: payload.instance,
      };
    }
    case actions.TURN_ON: {
      return {
        ...state,
        inUse: true,
      };
    }
    case actions.TURN_OFF: {
      return {
        ...state,
        inUse: false,
      };
    }
    default: {
      return state;
    }
  }
}
