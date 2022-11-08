import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { flowActions } from '../../redux/flowActions/actions';
import { ButtonsList } from '../../components/styled/DataFlow';

import { actionsButtons } from './assets';
import { UI_ROUTES } from '../../constants/routes';

const ActionsList = () => {

  const dispatch = useDispatch();

  const onClick = useCallback((event) => {
    const { target } = event;
    const { id } = target.dataset;

    dispatch(flowActions.actionCreate(id));
  }, [dispatch]);

  const onClickNext = useCallback(() => {
    dispatch(push(UI_ROUTES.outputs));
  }, [dispatch]);

  const onClickBack = useCallback(() => {
    dispatch(push(UI_ROUTES.triggers));
  }, [dispatch]);

  const onClickCancel = useCallback(() => {
    dispatch(flowActions.reset());
  }, [dispatch]);

  const buttons = actionsButtons.map(item => {
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
        <Button type="primary" icon={<RightOutlined />} onClick={onClickNext}>Next</Button>
        <Button type="default" icon={<LeftOutlined />} onClick={onClickBack}>Back</Button>
        <Button type="danger" onClick={onClickCancel}>Cancel</Button>
      </div>
    </ButtonsList>
  );
};

export default ActionsList;
export { ActionsList };
