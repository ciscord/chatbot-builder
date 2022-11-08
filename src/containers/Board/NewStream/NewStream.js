import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { streamsActions } from '../../../redux/streams/actions';

import { EditableText } from '../../../components/EditableText';
import { Wrapper } from './NewStream.style';

const NewStream = ({ projectID }) => {

  const dispatch = useDispatch();

  const onChange = useCallback((title) => {
    if (title.trim() !== '' && title.trim() !== 'Add a Stream...') {
      dispatch(streamsActions.streamCreate({
        projectID,
        title,
      }));
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="header">
        <EditableText
          value="Add a Stream..."
          onChange={onChange}
        />
      </div>
    </Wrapper>
  );
};

NewStream.propTypes = {
  projectID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default NewStream;
export { NewStream };
