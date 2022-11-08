import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { selectOutput } from '../../../redux/outputs/selectors';
import { currentOutputActions } from '../../../redux/currentOutput/actions';
import { modalsActions } from '../../../redux/modals/actions';

import { Wrapper } from './OutputDetails.style';
import { SYSTEM_OUTPUTS_TYPES_TITLES } from '../../../constants/outputs';

const OutputDetails = () => {

  const dispatch = useDispatch();
  const output = useSelector(selectOutput, shallowEqual);

  const onClick = useCallback(() => {
    dispatch(currentOutputActions.baseDataRefresh({
      ...output,
    }));
    dispatch(modalsActions.outputShow());
  }, [dispatch, output]);

  const { systemType } = output;
  const name = SYSTEM_OUTPUTS_TYPES_TITLES[systemType] || null;

  if (!name) {
    return null;
  }

  return (
    <Wrapper onClick={onClick}>
      {name}
    </Wrapper>
  );
};

export default OutputDetails;
export { OutputDetails };
