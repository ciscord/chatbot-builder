import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { LeftOutlined, SaveOutlined } from '@ant-design/icons';

import { UI_ROUTES } from '../../constants/routes';
import { outputsActions } from '../../redux/outputs/actions';
import { dataFlowActions } from '../../redux/dataFlow/actions';

import { Button } from '../../lib/ui';
import { ButtonsList } from '../../components/styled/DataFlow';

import { outputsButtons } from './assets';

const OutputsList = () => {

  const dispatch = useDispatch();

  const onClick = useCallback((event) => {
    const { target } = event;
    const { id } = target.dataset;

    dispatch(outputsActions.outputRefresh({
      systemType: id,
      inputs: {},
      outputs: {},
    }));
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(push(UI_ROUTES.actions));
  }, [dispatch]);

  const onClickCancel = useCallback(() => {
    dispatch(outputsActions.reset());
  }, [dispatch]);

  const onClickSave = useCallback(() => {
    dispatch(dataFlowActions.dataFlowSave());
  }, [dispatch]);

  const buttons = outputsButtons.map(item => {
    const { id, name, icon } = item;

    return (
      <Button
        key={id}
        icon={icon}
        data-id={id}
        onClick={onClick}
      >
        {name}
      </Button>
    );
  });

  return (
    <ButtonsList>
      <div className="list">
        {buttons}
      </div>
      <div className="controls">
        <Button type="primary" icon={<SaveOutlined />} onClick={onClickSave}>Save</Button>
        <Button type="default" icon={<LeftOutlined />} onClick={onClickBack}>Back</Button>
        <Button type="danger" onClick={onClickCancel}>Cancel</Button>
      </div>
    </ButtonsList>
  );
};

export default OutputsList;
export { OutputsList };
