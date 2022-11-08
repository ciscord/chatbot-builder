import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { CalendarOutlined } from '@ant-design/icons';

import { isArray } from '../../lib/lodash';
import { DND_TYPES } from '../../constants/dnd';
import { selectTaskByID } from '../../redux/tasks/selectors';
import { selectUserByID } from '../../redux/users/selectors';

import { currentTaskActions } from '../../redux/currentTask/actions';
import { modalsActions } from '../../redux/modals/actions';

import { TaskTags } from '../../components/TaskTags';
import { TaskUsers } from '../../components/TaskUsers';
import { TaskMenu } from './TaskMenu';

import { Wrapper } from './Task.style';

const Task = ({ id, index, moveTask, findTask }) => {
	const dispatch = useDispatch();

	const task = useSelector(selectTaskByID(id), shallowEqual);
	const parentTask = useSelector(selectTaskByID(task.parentID), shallowEqual);
	const { title, createdBy, timelineEnd, tags, assignees, streamID } = task || {};
	const { title: parentTitle } = parentTask || {};

	const author = useSelector(selectUserByID(createdBy));

	const [{ isDragging }, drag] = useDrag({
		item: {
			id,
			streamID,
			type: DND_TYPES.task,
			originalIndex: index,
		},
		collect: monitor => ({
			isDragging: monitor.isDragging(),
		}),
		end: (dropResult, monitor) => {
			const { id: droppedId, originalIndex } = monitor.getItem();
			const didDrop = monitor.didDrop();
			if (!didDrop) {
				moveTask(droppedId, originalIndex);
			}
		},
	});

	const [, drop] = useDrop({
		accept: DND_TYPES.task,
		canDrop: () => false,
		hover({ id: draggedId }) {
			if (draggedId !== id) {
				const { index: overIndex } = findTask(id);
				moveTask(draggedId, overIndex);
			}
		},
	});

	const onEditClick = useCallback(() => {
		dispatch(currentTaskActions.baseDataRefresh(task));
		dispatch(modalsActions.taskShow());
	}, [dispatch, task]);

	const userIDs = isArray(assignees) ? assignees.map(item => item.userID) : [];
	const opacity = isDragging ? 0.5 : 1;

	return (
		<div ref={node => drag(drop(node))} style={{ opacity }}>
			<Wrapper>
				<div className="settings">
					<TaskMenu id={id} />
				</div>
				<div className="name" onClick={onEditClick}>
					{title}
					{parentTitle ? `-(${parentTitle})` : ''}
				</div>
				<div className="author">{author ? author.name : ''}</div>
				<TaskTags tags={tags} />
				<div className="expired">
					<CalendarOutlined />
					<span>{timelineEnd}</span>
				</div>
				<div className="users">
					<TaskUsers userIDs={userIDs} />
				</div>
			</Wrapper>
		</div>
	);
};

Task.propTypes = {
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	index: PropTypes.number.isRequired,
	moveTask: PropTypes.func.isRequired,
	findTask: PropTypes.func.isRequired,
};

export default Task;
export { Task };
