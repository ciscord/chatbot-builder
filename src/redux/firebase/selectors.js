import { createSelector } from 'reselect';

const instance = ({ Firebase }) => Firebase.instance;
const inUse = ({ Firebase }) => Firebase.inUse;

export const selectFirebaseInstance = createSelector(
	[instance],
	(instance) => instance,
);

export const selectFirebaseInUse = createSelector(
	[inUse],
	(inUse) => inUse,
);
