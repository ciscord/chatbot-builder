import React, { useCallback } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';

import { SYSTEM_ACTION_TYPES_TITLES } from '../../../../constants/actions';
import { currentFunctionActions } from '../../../../redux/currentFunction/actions';
import { selectBaseData } from '../../../../redux/currentFunction/selectors';

import { EditableText } from '../../../../components/EditableText';
import { Wrapper } from './ModalTitle.style';

const ModalTitle = () => {

  const dispatch = useDispatch();
  const { actionType, name } = useSelector(selectBaseData);
  const title = SYSTEM_ACTION_TYPES_TITLES[actionType] || actionType;

  const onChange = useCallback((newName) => {
    dispatch(currentFunctionActions.baseDataRefresh({
      name: newName,
    }));
  }, [dispatch]);

  return (
    <Wrapper>
      <div className="title">{title}</div>
      <EditableText
        value={name}
        onChange={onChange}
      />
      <div className="info">{moment().format('LLL')}</div>
    </Wrapper>
  );
};

export default ModalTitle;
export { ModalTitle };
