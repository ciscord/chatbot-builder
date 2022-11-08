import React, { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { Modal, Row, Col } from 'antd';

import { modalsActions } from '../../../redux/modals/actions';
import { outputsActions } from '../../../redux/outputs/actions';
import { currentOutputActions } from '../../../redux/currentOutput/actions';
import { selectOutputVisible } from '../../../redux/modals/selectors';
import { selectBaseData, selectPreview } from '../../../redux/currentOutput/selectors';

import { ModalTitle } from './ModalTitle';
import { InputsForm, InputsFormBag } from './InputsForm';
import { ResultView } from './ResultView';
import { Wrapper } from './Output.style';

const Output = () => {

  const dispatch = useDispatch();
  const visible = useSelector(selectOutputVisible, shallowEqual);
  const baseData = useSelector(selectBaseData, shallowEqual);
  const preview = useSelector(selectPreview, shallowEqual);

  const onOk = useCallback(() => {
    InputsFormBag.submitForm();
  }, [dispatch]);

  const onClose = useCallback(() => {
    dispatch(modalsActions.outputHide());
    dispatch(currentOutputActions.reset());
  }, [dispatch]);

  const onSubmit = useCallback((values) => {
    dispatch(outputsActions.outputRefresh({
      ...baseData,
      inputs: { ...values },
      outputs: { ...preview },
    }));
    dispatch(modalsActions.outputHide());
    dispatch(currentOutputActions.reset());
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

export default Output;
export { Output };
