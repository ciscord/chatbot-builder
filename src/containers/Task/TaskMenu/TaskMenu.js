import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { tasksActions } from '../../../redux/tasks/actions';
import { currentTaskActions } from '../../../redux/currentTask/actions';
import { modalsActions } from '../../../redux/modals/actions';
import { selectTaskByID } from '../../../redux/tasks/selectors';

import { ItemMenu } from '../../../components/ItemMenu';

const menuItems = [
  { key: 'edit', title: 'Edit Task' },
  { key: 'delete', title: 'Delete Task' },
];

const TaskMenu = ({ id }) => {

  const dispatch = useDispatch();
  const task = useSelector(selectTaskByID(id), shallowEqual);

  const onClick = useCallback((key) => {
    switch (key) {
      case 'edit': {
        dispatch(currentTaskActions.baseDataRefresh(task));
        dispatch(modalsActions.taskShow());
        break;
      }
      case 'delete': {
        dispatch(tasksActions.taskRemove(id));
        break;
      }
      default:
    }
  }, [dispatch, task]);

  return (
    <ItemMenu
      items={menuItems}
      onClick={onClick}
    />
  );
};

TaskMenu.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TaskMenu;
export { TaskMenu };
