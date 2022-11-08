import { ReduxUtils } from '../../utils/ReduxUtils';

const prefix = '[Firebase]';
const { makeActionCreator } = ReduxUtils;

const TYPES = {
	SET_INSTANCE: `${prefix} set-instance`,
	TURN_ON: `${prefix} turn-on`,
	TURN_OFF: `${prefix} turn-off`,
};

export const firebaseActions = {
	...TYPES,
	setInstance: makeActionCreator(TYPES.SET_INSTANCE, 'instance'),
	turnOn: makeActionCreator(TYPES.TURN_ON),
	turnOff: makeActionCreator(TYPES.TURN_OFF),
};
