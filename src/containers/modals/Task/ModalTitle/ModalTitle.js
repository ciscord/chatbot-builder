import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { currentTaskActions } from '../../../../redux/currentTask/actions';
import { selectBaseData } from '../../../../redux/currentTask/selectors';

import { EditableText } from '../../../../components/EditableText';
import { Wrapper } from './ModalTitle.style';

const ModalTitle = () => {

  const dispatch = useDispatch();
  const { title } = useSelector(selectBaseData);

  const onChange = useCallback((newTitle) => {
    if (newTitle.trim() !== '') {
      dispatch(currentTaskActions.baseDataRefresh({
        title: newTitle,
      }));
    }
  }, [dispatch]);

  return (
    <Wrapper>
      <EditableText
        strong
        value={title}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default ModalTitle;
export { ModalTitle };
