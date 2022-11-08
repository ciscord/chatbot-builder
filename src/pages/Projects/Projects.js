import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMount } from 'react-use';

import { projectsActions } from '../../redux/projects/actions';
import { modalsActions } from '../../redux/modals/actions';
import { selectList } from '../../redux/projects/selectors';

import { ProjectCard } from '../../containers/ProjectCard';
import { NewProject } from '../../components/NewProject';

import { Wrapper } from './Projects.style';

const Projects = () => {

  const dispatch = useDispatch();
  const list = useSelector(selectList);

  useMount(() => {
    dispatch(projectsActions.listReload());
  });

  const onClick = useCallback(() => {
    dispatch(modalsActions.newProjectShow());
  }, [dispatch]);

  const projects = list.map(project => {
    const { id } = project;
    return (
      <ProjectCard
        key={id}
        id={id}
      />
    );
  });

  return (
    <Wrapper>
      <NewProject onClick={onClick} />
      {projects}
    </Wrapper>
  );
};

export default Projects;
export { Projects };
