import Immutable from 'seamless-immutable';

import CommonUtils from '../../utils/CommonUtils';
import { breadcrumbsActions as actions } from './actions';

const initState = Immutable.from({
  dataFlowUI: {
    projectID: null,
    tasksList: [],
    taskIDs: [],
  },
});

export default function breadcrumbsReducer(state = initState, { type, payload }) {
  switch (type) {
    case actions.DATA_FLOW_UI_MERGE: {
      const result = CommonUtils.safeMerge(state.dataFlowUI, payload.dataFlowUI);
      return Immutable.set(state, 'dataFlowUI', result);
    }
    default: {
      return state;
    }
  }
}
