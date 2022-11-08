import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Tabs } from 'antd';

import { projectsActions } from '../../../redux/projects/actions';
import { modalsActions } from '../../../redux/modals/actions';
import { selectNewProjectVisible } from '../../../redux/modals/selectors';

import { ButtonAdd } from '../../../components/ButtonAdd/ButtonAdd';

const { TabPane } = Tabs;

const NewProject = () => {

  const dispatch = useDispatch();
  const visible = useSelector(selectNewProjectVisible);

  const closeModal = useCallback(() => {
    dispatch(modalsActions.newProjectHide());
  }, [dispatch]);

  const onClickBlank = useCallback(() => {
    const projectData = {
      name: 'Blank Project',
    };
    dispatch(projectsActions.projectCreate(projectData));
  }, [dispatch]);

  return (
    <Modal
      destroyOnClose
      title="New Project"
      okText="Start"
      visible={visible}
      onOk={closeModal}
      onCancel={closeModal}
    >
      <Tabs defaultActiveKey="1">
        <TabPane tab="Blank" key="blank">
          <ButtonAdd
            title="Blank"
            size={120}
            onClick={onClickBlank}
          />
        </TabPane>
        <TabPane tab="Projects" key="projects" disabled>
          <ButtonAdd
            title="Projects"
            size={120}
            onClick={() => {}}
          />
        </TabPane>
        <TabPane tab="Template" key="template" disabled>
          <ButtonAdd
            title="Template"
            size={120}
            onClick={() => {}}
          />
        </TabPane>
      </Tabs>
    </Modal>
  );
};

export default NewProject;
export { NewProject };
