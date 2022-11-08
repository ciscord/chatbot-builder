/**
 * The lowest level of reducers.
 * Adhere alphabetical order for import and export sections of this file.
 */

import App from './app/reducer';
import Auth from './auth/reducer';
import Breadcrumbs from './breadcrumbs/reducer';
import CurrentFunction from './currentFunction/reducer';
import CurrentOutput from './currentOutput/reducer';
import CurrentProject from './currentProject/reducer';
import CurrentTask from './currentTask/reducer';
import CurrentTrigger from './currentTrigger/reducer';
import DataFlow from './dataFlow/reducer';
import Firebase from './firebase/reducer';
import FlowActions from './flowActions/reducer';
import Modals from './modals/reducer';
import Outputs from './outputs/reducer';
import Projects from './projects/reducer';
import Streams from './streams/reducer';
import Tasks from './tasks/reducer';
import Triggers from './triggers/reducer';
import Users from './users/reducer';

const reducers = {
	App,
	Auth,
	Breadcrumbs,
	CurrentFunction,
	CurrentOutput,
	CurrentProject,
	CurrentTask,
	CurrentTrigger,
	DataFlow,
	Firebase,
	FlowActions,
	Modals,
	Outputs,
	Projects,
	Streams,
	Tasks,
	Triggers,
	Users,
};

export default reducers;
