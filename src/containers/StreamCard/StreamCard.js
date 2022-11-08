import React from 'react';
import * as PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectByID } from '../../redux/streams/selectors';

import { CardTitle } from './CardTitle';
import { TasksList } from '../TasksList';

import { Wrapper } from './StreamCard.style';

const StreamCard = ({ id }) => {

  const stream = useSelector(selectByID(id));
  const { projectID } = stream;

  return (
    <Wrapper>
      <CardTitle id={id} />
      <TasksList
        projectID={projectID}
        streamID={id}
      />
    </Wrapper>
  );
};

StreamCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StreamCard;
export { StreamCard };
