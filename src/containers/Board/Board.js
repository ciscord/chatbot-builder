import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';
import { useSelector } from 'react-redux';

import { DND_TYPES } from '../../constants/dnd';

import { selectListByProjectID } from '../../redux/streams/selectors';

import { StreamCard } from '../StreamCard';
import { NewStream } from './NewStream';

import { Wrapper } from './Board.style';

const Board = ({ projectID }) => {

  const streams = useSelector(selectListByProjectID(projectID));
  const [localList, setLocalList] = useState(streams);

  const streamsCount = streams.length;
  useEffect(() => {
    setLocalList(streams);
  }, [streamsCount]);

  const [, drop] = useDrop({
    accept: DND_TYPES.task,
  });

  const cards = localList.map((subProject, index) => {
    const { id } = subProject;
    return (
      <StreamCard
        key={id}
        id={id}
      />
    );
  });

  return (
    <Wrapper>
      <div ref={drop} className="cards">
        {cards}
        <NewStream projectID={projectID} />
      </div>
    </Wrapper>
  );
};

Board.propTypes = {
  projectID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Board;
export { Board };
