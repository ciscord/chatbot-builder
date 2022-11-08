import React from 'react';
import * as PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectUsersListByID } from '../../redux/users/selectors';

import { Wrapper } from './TaskUsers.style';

const colors = ['cyan', 'green', 'blue'];

const TaskUsers = ({ userIDs }) => {

  const users = useSelector(selectUsersListByID(userIDs));

  const { length } = users;
  const diff = length - 2;

  const plusUser = { name: `+${diff}` };
  const resUsers = length < 3
    ? users
    : users.slice(0, 2).concat(plusUser);

  return (
    <Wrapper>
      {resUsers.map((user, index) => {
        const { name } = user;
        const letter = (index === 2) ? name : name[0];
        const shift = index * 7;
        return (
          <div
            key={index}
            className={`badge ${colors[index]}`}
            style={{ transform: `translateX(-${shift}px)` }}
          >
            {letter}
          </div>
        );
      })}
    </Wrapper>
  );
};

TaskUsers.propTypes = {
  userIDs: PropTypes.arrayOf(PropTypes.number),
};

TaskUsers.defaultProps = {
  userIDs: [],
};

export default TaskUsers;
export { TaskUsers };
