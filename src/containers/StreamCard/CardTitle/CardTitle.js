import React, { useCallback, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { streamsActions } from '../../../redux/streams/actions';
import { selectByID } from '../../../redux/streams/selectors';

import { EditableText } from '../../../components/EditableText';

const CardTitle = ({ id }) => {

  const dispatch = useDispatch();
  const stream = useSelector(selectByID(id));

  const onChange = useCallback((title) => {
    if (title.trim() !== '') {
      dispatch(streamsActions.streamUpdate(id, {
        title,
      }));
    }
  }, [dispatch]);

  const { title } = stream;
  const initValues = {
    title,
  };

  return (
    <div className="header">
      <EditableText
        value={title}
        onChange={onChange}
      />
    </div>
  );
};

CardTitle.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default CardTitle;
export { CardTitle };
