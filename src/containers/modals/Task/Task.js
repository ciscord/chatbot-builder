import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';

import { modalsActions } from '../../../redux/modals/actions';
import { currentTaskActions } from '../../../redux/currentTask/actions';
import { selectTaskVisible } from '../../../redux/modals/selectors';

import { ModalTitle } from './ModalTitle/ModalTitle';
import { MainForm, mainFormBag } from './MainForm';
import { Wrapper } from './Task.style';

const Task = () => {

  const dispatch = useDispatch();
  const visible = useSelector(selectTaskVisible);

  const onOk = useCallback(() => {
    mainFormBag.submitForm();
  }, [mainFormBag]);

  const onClose = useCallback(() => {
    dispatch(modalsActions.taskHide());
    dispatch(currentTaskActions.reset());
  }, [dispatch]);

  const onSubmit = useCallback((values) => {
    dispatch(currentTaskActions.baseDataUpdate(values));
  }, [dispatch]);

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
        <MainForm onSubmit={onSubmit} />
      </Wrapper>
    </Modal>
  );
};

export default Task;
export { Task };
