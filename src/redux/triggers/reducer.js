import Immutable from 'seamless-immutable';

import { CommonUtils } from '../../utils/CommonUtils';
import {
  INTERVALS,
  ON_NEW,
  ON_COMPLETE,
} from '../../constants/triggers';
import { triggersActions as actions } from './actions';

const initState = Immutable.from({
  systemTriggersList: [],
  trigger: {
    systemType: '',
    triggerType: '',
    inputs: {},
    outputs: {},
  },
  UI: {
    triggerType: null,
    intervalType: INTERVALS.none,
    onNewType: ON_NEW.none,
    onCompleteType: ON_COMPLETE.none,
  },
});

export default function triggersReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.SYSTEM_TRIGGERS_REFRESH: {
      return Immutable.set(state, 'systemTriggersList', payload.systemTriggersList);
    }
    case actions.TRIGGER_REFRESH: {
      const result = CommonUtils.safeMerge(state.trigger, payload.trigger);
      return Immutable.set(state, 'trigger', result);
    }
    case actions.TRIGGER_RESET: {
      const result = initState.trigger;
      return Immutable.set(state, 'trigger', result);
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
