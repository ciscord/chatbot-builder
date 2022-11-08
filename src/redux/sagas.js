/**
 * The lowest level of sagas.
 * Adhere alphabetical order for import and export sections of this file.
 */

import { all, fork } from 'redux-saga/effects';

import appSaga from './app/saga';
import authSaga from './auth/saga';
import breadcrumbsSaga from './breadcrumbs/saga';
import currentFunctionSaga from './currentFunction/saga';
import currentOutputSaga from './currentOutput/saga';
import currentProjectSaga from './currentProject/saga';
import currentTaskSaga from './currentTask/saga';
import currentTriggerSaga from './currentTrigger/saga';
import dataFlowSaga from './dataFlow/saga';
import eventBusSaga from './eventBus/saga';
import flowActionsSaga from './flowActions/saga';
import outputsSaga from './outputs/saga';
import projectsSaga from './projects/saga';
import streamsSaga from './streams/saga';
import tasksSaga from './tasks/saga';
import triggersSaga from './triggers/saga';
import usersSaga from './users/saga';

export default function* rootSaga() {
	yield all([
		fork(appSaga),
		fork(authSaga),
		fork(breadcrumbsSaga),
		fork(currentFunctionSaga),
		fork(currentOutputSaga),
		fork(currentProjectSaga),
		fork(currentTaskSaga),
		fork(currentTriggerSaga),
		fork(dataFlowSaga),
		fork(eventBusSaga),
		fork(flowActionsSaga),
		fork(outputsSaga),
		fork(projectsSaga),
		fork(streamsSaga),
		fork(tasksSaga),
		fork(triggersSaga),
		fork(usersSaga),
	]);
}
