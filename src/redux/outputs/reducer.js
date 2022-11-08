import Immutable from 'seamless-immutable';
import { CommonUtils } from '../../utils/CommonUtils';
import { outputsActions as actions } from './actions';

const initState = Immutable.from({
  systemOutputs: {},
  output: {
    systemType: '',
    inputs: {},
    outputs: {},
  },
});

export default function outputsReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.SYSTEM_OUTPUTS_REFRESH: {
      return Immutable.set(state, 'systemOutputs', payload.systemOutputs);
    }
    case actions.OUTPUT_REFRESH: {
      const result = CommonUtils.safeMerge(state.output, payload.output);
      return Immutable.set(state, 'output', result);
    }
    case actions.OUTPUT_CLEAR: {
      const result = initState.output;
      return Immutable.set(state, 'output', result);
    }
    case actions.RESET: {
      return Immutable.set(state, 'output', initState.output);
    }
    default: {
      return state;
    }
  }
}
