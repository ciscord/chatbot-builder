import React, { useCallback, useEffect, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useDrop } from 'react-dnd';
import { EditOutlined } from '@ant-design/icons';

import { DND_TYPES } from '../../constants/dnd';

import { modalsActions } from '../../redux/modals/actions';
import { tasksActions } from '../../redux/tasks/actions';
import { currentTaskActions } from '../../redux/currentTask/actions';
import { selectTasksByStreamID } from '../../redux/tasks/selectors';

import { Task } from '../Task';

import { Wrapper } from './TasksList.style';

const TasksList = ({ streamID }) => {

  const dispatch = useDispatch();
  const list = useSelector(selectTasksByStreamID(streamID), shallowEqual);
  const [localList, setLocalList] = useState(list);

  const tasksCount = list.length;
  useEffect(() => {
    setLocalList(list);
  }, [tasksCount]);

  const [, drop] = useDrop({
    accept: DND_TYPES.task,
    drop(item, monitor) {
      const { id, streamID: sourceStreamID } = item;
      // reordering tasks
      if (sourceStreamID === streamID) {
        dispatch(tasksActions.taskReorder(localList));

      // moving tasks between streams
      } else {
        dispatch(tasksActions.taskMove(id, streamID));
      }
    },
  });

  const findTask = useCallback((id) => {
    const task = localList.filter(t => t.id === id)[0];
    return {
      task,
      index: localList.indexOf(task),
    };
  }, [localList]);

  const moveTask = useCallback((id, atIndex) => {
    const { task, index } = findTask(id);
    if (!task) {
      return;
    }
    const newList = [...localList];

    if (atIndex < index) {
      newList.splice(index, 1);
      newList.splice(atIndex, 0, task);
    } else {
      newList.splice(atIndex, 0, task);
      newList.splice(index, 1);
    }

    setLocalList(newList);
  }, [localList, findTask, setLocalList]);

  const tasks = localList.map((task, index) => {
    const { id } = task;
    return (
      <Task
        key={id}
        id={id}
        index={index}
        moveTask={moveTask}
        findTask={findTask}
      />
    );
  });

  const onClickNewTask = useCallback(() => {
    dispatch(currentTaskActions.uiMerge({ streamID }));
    dispatch(modalsActions.taskShow());
  }, [dispatch]);

  return (
    <Wrapper>
      <div ref={drop}>
        {tasks}
        <div className="new-task" onClick={onClickNewTask}>
          <span>Add a Task...</span>
          <EditOutlined />
        </div>
      </div>
    </Wrapper>
  );
};

TasksList.propTypes = {
  streamID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default TasksList;
export { TasksList };
