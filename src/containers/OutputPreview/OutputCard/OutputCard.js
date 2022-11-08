import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { SYSTEM_OUTPUTS_TYPES, SYSTEM_OUTPUTS_TYPES_TITLES } from '../../../constants/outputs';
import { outputsActions } from '../../../redux/outputs/actions';
import { selectOutput } from '../../../redux/outputs/selectors';

import { DataFlowCard } from '../../../components/DataFlowCard';
import { currentOutputActions } from '../../../redux/currentOutput/actions';
import { modalsActions } from '../../../redux/modals/actions';

import { OutputDetails } from '../OutputDetails';

const OutputCard = () => {

  const dispatch = useDispatch();
  const output = useSelector(selectOutput, shallowEqual);

  const onCreate = useCallback(() => {
    const systemType = output.systemType || SYSTEM_OUTPUTS_TYPES.narrative;
    dispatch(currentOutputActions.baseDataRefresh({
      ...output,
      systemType,
    }));
    dispatch(modalsActions.outputShow());
  }, [dispatch, output]);

  const onRemove = useCallback(() => {
    dispatch(outputsActions.outputClear());
  }, [dispatch]);

  const { systemType } = output;
  const cardName = SYSTEM_OUTPUTS_TYPES_TITLES[systemType];

  return (
    <DataFlowCard
      name={cardName}
      onCreate={onCreate}
      onRemove={onRemove}
    >
      <OutputDetails />
    </DataFlowCard>
  );
};

export default OutputCard;
export { OutputCard };
