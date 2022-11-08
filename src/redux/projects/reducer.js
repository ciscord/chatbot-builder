import Immutable from 'seamless-immutable';

import { projectsActions as actions } from './actions';

const initState = Immutable.from({
	list: [],
});

export default function projectsReducer(state = initState, { type, payload }) {
	switch (type) {
		case actions.LIST_REFRESH: {
			return Immutable.set(state, 'list', payload.list);
		}
		case actions.PROJECT_SELECT: {
			return Immutable.set(state, 'selected', payload.id);
		}
		default: {
			return state;
		}
	}
}
