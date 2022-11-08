import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SYSTEM_TRIGGER_TYPES } from '../../../constants/triggers';
import { triggersActions } from '../../../redux/triggers/actions';
import { selectTrigger } from '../../../redux/triggers/selectors';

import { DataFlowCard } from '../../../components/DataFlowCard';
import { currentTriggerActions } from '../../../redux/currentTrigger/actions';
import { modalsActions } from '../../../redux/modals/actions';

import { TriggerDetails } from '../TriggerDetails';
import { createCardTitle } from './assets';

const TriggerCard = () => {

  const dispatch = useDispatch();
  const trigger = useSelector(selectTrigger, shallowEqual);

  const onCreate = useCallback(() => {
    const systemType = trigger.systemType || SYSTEM_TRIGGER_TYPES.email;
    dispatch(currentTriggerActions.baseDataRefresh({
      ...trigger,
      systemType,
    }));
    dispatch(modalsActions.triggerShow());
  }, [dispatch, trigger]);

  const onRemove = useCallback(() => {
    dispatch(triggersActions.reset());
  }, [dispatch]);

  const cardName = createCardTitle(trigger);

  return (
    <DataFlowCard
      name={cardName}
      onCreate={onCreate}
      onRemove={onRemove}
    >
      <TriggerDetails />
    </DataFlowCard>
  );
};

export default TriggerCard;
export { TriggerCard };
