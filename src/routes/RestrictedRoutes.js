import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../constants/routes';

/**
 * After refactoring all pages must be in folder '/src/pages'
 * Also all modals must be rendered here
 */

/**
 * The following must be deleted after refactoring
 */
// const Projects = lazy(() => import('../_OldCode/parts/main/Projects'));
// const Metrics = lazy(() => import('../_OldCode/parts/main/Metrics'));
// const Trigger = lazy(() => import('../_OldCode/parts/main/Trigger'));
// const Action = lazy(() => import('../_OldCode/parts/main/Action'));
// const Output = lazy(() => import('../_OldCode/parts/main/Output'));
// const Interaction = lazy(() => import('../_OldCode/parts/main/Interaction'));

/**
 * The following must be uncommented and be used after refactoring
 */
const Projects = lazy(() => import('../pages/Projects'));
const Project = lazy(() => import('../pages/Project'));

const Triggers = lazy(() => import('../pages/Triggers'));
const Actions = lazy(() => import('../pages/Actions'));
const Outputs = lazy(() => import('../pages/Outputs'));

const Interaction = lazy(() => import('../pages/Interaction'));

const EmptyPage = lazy(() => import('../pages/EmptyPage'));
const Page404 = lazy(() => import('../pages/Page404'));

// modals
const NewProjectModal = lazy(() => import('../containers/modals/NewProject'));
const TaskModal = lazy(() => import('../containers/modals/Task'));
const TriggerModal = lazy(() => import('../containers/modals/Trigger'));
const FunctionModal = lazy(() => import('../containers/modals/Function'));
const OutputModal = lazy(() => import('../containers/modals/Output'));

const ENTITY_ROUTES = {
	project: `${UI_ROUTES.projects}/:id`,
};

const RestrictedRoutes = () => {
	return (
		<Suspense fallback={<div />}>
			<Switch>
				{/* Overview */}
				<Route exact path={UI_ROUTES.root} render={props => <Projects {...props} />} />
				<Route exact path={UI_ROUTES.projects} render={props => <Projects {...props} />} />
				<Route exact path={ENTITY_ROUTES.project} render={props => <Project {...props} />} />
				{/* <Route exact path={UI_ROUTES.metrics} render={props => <Metrics {...props} />} /> */}

				{/* Data Flow */}
				<Route exact path={UI_ROUTES.triggers} render={props => <Triggers {...props} />} />
				<Route exact path={UI_ROUTES.actions} render={props => <Actions {...props} />} />
				<Route exact path={UI_ROUTES.outputs} render={props => <Outputs {...props} />} />

				{/* Interaction */}
				<Route exact path={UI_ROUTES.interaction} render={props => <Interaction {...props} />} />
				<Route exact path={UI_ROUTES.training} render={props => <EmptyPage {...props} />} />

				{/* Deployment */}
				<Route exact path={UI_ROUTES.deployment} render={props => <EmptyPage {...props} />} />
				<Route exact path={UI_ROUTES.adoption} render={props => <EmptyPage {...props} />} />

				{/* Others */}
				<Route path="*" render={props => <Page404 {...props} />} />
			</Switch>

			{/* Modals */}
			<NewProjectModal />
			<TaskModal />
			<TriggerModal />
			<FunctionModal />
			<OutputModal />
		</Suspense>
	);
};

export default RestrictedRoutes;
export { RestrictedRoutes };
