import React, { useEffect } from 'react';
import firebase from 'firebase';
import { useMount } from 'react-use';
import { useSelector, useDispatch } from 'react-redux';

import { firebaseConfig } from '../../config';

import { appActions } from '../../redux/app/actions';
import { firebaseActions } from '../../redux/firebase/actions';
import { authActions } from '../../redux/auth/actions';
import { selectAppStarted, selectUI } from '../../redux/app/selectors';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectFirebaseInUse } from '../../redux/firebase/selectors';

import { PublicRoutes } from '../../routes';
import { AppLoader } from '../../components/loaders';
import { Root } from '../Root';

const App = () => {

	const dispatch = useDispatch();
	const appStarted = useSelector(selectAppStarted);
	const isLoggedIn = useSelector(selectIsLoggedIn);
	const firebaseInUse = useSelector(selectFirebaseInUse);
	const { loading } = useSelector(selectUI);

	useMount(() => {
		dispatch(appActions.appStart());
	});

	useEffect(() => {
		if (!firebaseInUse) {
			return;
		}

		if (!firebase.apps.length) {
			firebase.initializeApp(firebaseConfig);
		}
		dispatch(firebaseActions.setInstance(firebase));

		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				dispatch(authActions.firebaseLogin(user, firebase));
			} else {
				dispatch(authActions.logout());
			}
		});
	}, [firebaseInUse, dispatch]);

	const showRoot = (appStarted && isLoggedIn);
	const showPublic = (appStarted && !isLoggedIn);

	return (
		<>
			{showRoot && (<Root />)}
			{showPublic && (<PublicRoutes />)}
			<AppLoader visible={loading} />
		</>
	);
};

export default App;
export { App };
