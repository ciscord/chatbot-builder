import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Modal, Row, Col, Skeleton } from 'antd';

import { modalsActions } from '../../../redux/modals/actions';
import { triggersActions } from '../../../redux/triggers/actions';
import { currentTriggerActions } from '../../../redux/currentTrigger/actions';
import { selectTriggerVisible } from '../../../redux/modals/selectors';
import { selectBaseData, selectPreview } from '../../../redux/currentTrigger/selectors';

import { ModalTitle } from './ModalTitle';
import { InputsForm, InputsFormBag } from './InputsForm';
import { ResultView } from './ResultView';
import { Wrapper } from './Trigger.style';

const Trigger = () => {

  const dispatch = useDispatch();
  const visible = useSelector(selectTriggerVisible, shallowEqual);
  const baseData = useSelector(selectBaseData, shallowEqual);
  const preview = useSelector(selectPreview, shallowEqual);

  const onOk = useCallback(() => {
    InputsFormBag.submitForm();
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(modalsActions.triggerHide());
    dispatch(currentTriggerActions.reset());
  }, [dispatch]);

  const onSubmit = useCallback((values) => {
    dispatch(triggersActions.triggerRefresh({
      ...baseData,
      inputs: { ...values },
      outputs: { ...preview },
    }));
    dispatch(modalsActions.triggerHide());
    dispatch(currentTriggerActions.reset());
  }, [dispatch, baseData, preview]);

  return (
    <Modal
      destroyOnClose
      title={<ModalTitle />}
      okText="Save Changes"
      visible={visible}
      width="60vw"
      onOk={onOk}
      onCancel={onClose}
    >
      <Wrapper>
        <Row gutter={16}>
          <Col span={8}>
            <InputsForm onSubmit={onSubmit} />
          </Col>
          <Col span={16}>
            <ResultView />
          </Col>
        </Row>
      </Wrapper>
    </Modal>
  );
};

export default Trigger;
export { Trigger };
