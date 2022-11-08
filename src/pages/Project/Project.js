import React, { useEffect } from 'react';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { currentProjectActions } from '../../redux/currentProject/actions';
import { streamsActions } from '../../redux/streams/actions';
import { tasksActions } from '../../redux/tasks/actions';
import { selectProjectID } from '../../redux/router/selectors';
import { selectBaseData } from '../../redux/currentProject/selectors';

import { Board } from '../../containers/Board';

import { Title } from './Title';
import { Wrapper } from './Project.style';

const Project = () => {

  const dispatch = useDispatch();
  const projectID = useSelector(selectProjectID);
  const baseData = useSelector(selectBaseData);

  useEffect(() => {
    dispatch(currentProjectActions.baseDataReload(projectID));
    dispatch(streamsActions.listReload(projectID));
    dispatch(tasksActions.listReload(projectID));
  }, [projectID, dispatch]);

  if (!baseData) {
    return null;
  }

  return (
    <Wrapper>
      <Title />
      <DndProvider backend={Backend}>
        <Board projectID={projectID} />
      </DndProvider>
    </Wrapper>
  );
};

export default Project;
export { Project };
