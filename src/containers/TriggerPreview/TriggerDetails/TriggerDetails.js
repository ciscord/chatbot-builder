import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { selectTrigger } from '../../../redux/triggers/selectors';
import { currentTriggerActions } from '../../../redux/currentTrigger/actions';
import { modalsActions } from '../../../redux/modals/actions';

import { Wrapper } from './TriggerDetails.style';
import { SYSTEM_TRIGGER_TYPES_TITLES } from '../../../constants/triggers';

const TriggerDetails = () => {

  const dispatch = useDispatch();
  const trigger = useSelector(selectTrigger, shallowEqual);

  const onClick = useCallback(() => {
    dispatch(currentTriggerActions.baseDataRefresh({
      ...trigger,
    }));
    dispatch(modalsActions.triggerShow());
  }, [dispatch, trigger]);

  const { systemType } = trigger;
  const name = SYSTEM_TRIGGER_TYPES_TITLES[systemType] || null;

  if (!name) {
    return null;
  }

  return (
    <Wrapper onClick={onClick}>
      {name}
    </Wrapper>
  );
};

export default TriggerDetails;
export { TriggerDetails };
