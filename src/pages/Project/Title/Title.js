import React, { useCallback, useState } from 'react';
import * as PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { UserAddOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { currentProjectActions } from '../../../redux/currentProject/actions';
import { selectBaseData } from '../../../redux/currentProject/selectors';

import { EditableText } from '../../../components/EditableText';
import { InviteForm } from '../InviteForm';
import { Wrapper } from './Title.style';

const Title = () => {

  const dispatch = useDispatch();
  const baseData = useSelector(selectBaseData);
  const [showForm, setShowForm] = useState(false);

  const onChangeName = useCallback((newName) => {
    dispatch(currentProjectActions.baseDataUpdate({
      name: newName,
    }));
  }, [dispatch]);

  const onClickInvite = useCallback(() => {
    setShowForm(true);
  }, [setShowForm]);

  const onChangeInvite = useCallback((assignees) => {
    console.log('Title.js,  [25]: ', { assignees });
    dispatch(currentProjectActions.baseDataUpdate({
      assignees,
    }));
    setShowForm(false);
  }, [dispatch, baseData, setShowForm]);

  const onCancelInvite = useCallback(() => {
    setShowForm(false);
  }, [setShowForm]);

  if (!baseData) {
    return null;
  }

  const { name } = baseData;

  return (
    <Wrapper>
      <EditableText
        strong
        value={name}
        onChange={onChangeName}
      />
      {!showForm && (
        <Button
          shape="circle"
          icon={<UserAddOutlined />}
          onClick={onClickInvite}
        />
      )}
      {showForm && (
        <InviteForm
          onSubmit={onChangeInvite}
          onCancel={onCancelInvite}
        />
      )}
    </Wrapper>
  );
};

export default Title;
export { Title };
