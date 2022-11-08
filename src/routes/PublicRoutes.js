import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { UI_ROUTES } from '../constants/routes';

const Login = lazy(() => import('../pages/Auth/Login'));
const SignUp = lazy(() => import('../pages/Auth/SignUp'));
const SendVerify = lazy(() => import('../pages/Auth/SendVerify'));
const SendReset = lazy(() => import('../pages/Auth/SendReset'));

const Verify = lazy(() => import('../pages/Auth/Verify'));
const ResetPassword = lazy(() => import('../pages/Auth/ResetPassword'));

const verifyRoute = `${UI_ROUTES.verifyUser}/:token`;
const resetPasswordRoute = `${UI_ROUTES.resetPassword}/:token`;

const PublicRoutes = () => {
  return (
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path={UI_ROUTES.login} render={props => <Login {...props} />} />
        <Route exact path={UI_ROUTES.signUp} render={props => <SignUp {...props} />} />
        <Route exact path={UI_ROUTES.sendVerify} render={props => <SendVerify {...props} />} />
        <Route exact path={UI_ROUTES.sendReset} render={props => <SendReset {...props} />} />

        <Route exact path={verifyRoute} render={props => <Verify {...props} />} />
        <Route exact path={resetPasswordRoute} render={props => <ResetPassword {...props} />} />

        <Route path="*" render={props => <Login {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default PublicRoutes;
export { PublicRoutes };
