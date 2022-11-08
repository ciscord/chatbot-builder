import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CopyOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { NavLink } from 'react-router-dom';

import { UI_ROUTES } from '../../constants/routes';

import { projectsActions } from '../../redux/projects/actions';
import { selectProjectByID } from '../../redux/projects/selectors';

import ProjectLogo from '../../images/project.png';
import { Wrapper } from './ProjectCard.style';

const ProjectCard = ({ id }) => {

  const dispatch = useDispatch();
  const project = useSelector(selectProjectByID(id));

  const { name, modified, image, active } = (project || {});

  const onChange = useCallback((checked) => {
    const resData = {
      ...project,
      active: checked,
    };
    dispatch(projectsActions.projectUpdate(id, resData));
  }, [dispatch, id, project]);

  const onClickRemove = useCallback(() => {
    dispatch(projectsActions.projectRemove(id));
  }, [dispatch, id]);

  if (!project) {
    return null;
  }

  const url = `${UI_ROUTES.projects}/${id}`;

  return (
    <Wrapper>
      <div className="toolbar">
        <div className="left" title="Project: On / Off">
          <Switch
            checked={active}
            onChange={onChange}
          />
        </div>
        <div className="right">
          <SettingOutlined title="Settings" />
          <CopyOutlined title="Copy" />
          <DeleteOutlined onClick={onClickRemove} title="Delete" />
        </div>
      </div>
      <NavLink to={url}>
        <div className="image">
          <img src={ProjectLogo} alt={name} />
        </div>
      </NavLink>
      <div className="info">
        <span>Name:</span>
        {name}
      </div>
      <div className="info">
        <span>Last Updated:</span>
        {modified}
      </div>
    </Wrapper>
  );
};

ProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ProjectCard;
export { ProjectCard };
