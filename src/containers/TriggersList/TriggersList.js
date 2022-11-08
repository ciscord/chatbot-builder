import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { UI_ROUTES } from '../../constants/routes';
import { TRIGGER_TYPES } from '../../constants/triggers';

import { triggersActions } from '../../redux/triggers/actions';
import { selectUI } from '../../redux/triggers/selectors';

import { Select } from '../../lib/ui';
import { ButtonsList } from '../../components/styled/DataFlow';

import { intervalOptions, onNewOptions, onCompleteOptions } from './assets';

const TriggersList = () => {

  const dispatch = useDispatch();
  const { triggerType, intervalType, onNewType, onCompleteType } = useSelector(selectUI);

  const onChangeInterval = useCallback((intervalType) => {
    dispatch(triggersActions.setIntervalType(intervalType));
  }, [dispatch]);

  const onChangeOnNew = useCallback((onNewType) => {
    dispatch(triggersActions.setOnNewType(onNewType));
  }, [dispatch]);

  const onChangeOnComplete = useCallback((onCompleteType) => {
    dispatch(triggersActions.setOnCompleteType(onCompleteType));
  }, [dispatch]);

  const onClickNext = useCallback(() => {
    dispatch(push(UI_ROUTES.actions));
  }, [dispatch]);

  const onClickCancel = useCallback(() => {
    dispatch(triggersActions.reset());
  }, [dispatch]);

  const intervalDisabled = (triggerType && triggerType !== TRIGGER_TYPES.interval);
  const onNewDisabled = (triggerType && triggerType !== TRIGGER_TYPES.onNew);
  const onCompleteDisabled = (triggerType && triggerType !== TRIGGER_TYPES.onComplete);

  return (
    <ButtonsList>
      <div className="list">
        <Select
          value={intervalType}
          disabled={intervalDisabled}
          options={intervalOptions}
          onChange={onChangeInterval}
        />
        <Select
          value={onNewType}
          disabled={onNewDisabled}
          options={onNewOptions}
          onChange={onChangeOnNew}
        />
        <Select
          value={onCompleteType}
          disabled={onCompleteDisabled}
          options={onCompleteOptions}
          onChange={onChangeOnComplete}
        />
      </div>
      <div className="controls">
        <Button type="primary" icon={<RightOutlined />} onClick={onClickNext}>Next</Button>
        <Button type="danger" onClick={onClickCancel}>Cancel</Button>
      </div>
    </ButtonsList>
  );
};

export default TriggersList;
export { TriggersList };
