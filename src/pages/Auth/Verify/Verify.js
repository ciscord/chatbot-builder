import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

import { authActions } from '../../../redux/auth/actions';
import { selectVerificationToken } from '../../../redux/router/selectors';

import { AppLoader } from '../../../components/loaders';

const Verify = () => {

  const dispatch = useDispatch();
  const token = useSelector(selectVerificationToken);

  useMount(() => {
    dispatch(authActions.verifyUser(token));
  });

  return (
    <AppLoader
      visible
      message="Please wait for a while. We are checking for your registration..."
    />
  );
};

export default Verify;
export { Verify };
