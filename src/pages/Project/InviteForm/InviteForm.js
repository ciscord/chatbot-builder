import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { CloseOutlined, SaveOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { SelectUtils } from '../../../utils/SelectUtils';
import { toInteger } from '../../../lib/lodash';

import { selectBaseData } from '../../../redux/currentProject/selectors';
import { selectList } from '../../../redux/users/selectors';

import { MultiSelect } from '../../../components/forms';
import { Wrapper } from './InviteForm.style';

const InviteForm = ({ onSubmit, onCancel }) => {

  const project = useSelector(selectBaseData);
  const usersList = useSelector(selectList);

  const assignees = project?.assignees || [];
  const options = SelectUtils.createUsersOptions(usersList);

  const onFormSubmit = useCallback((values, actions = null) => {
    console.log('InviteForm.js,  [27]: ', { values });
    const { userIDs } = values;
    const resUserIDs = userIDs.map(id => toInteger(id));

    onSubmit(resUserIDs);
    if (actions) {
      actions.setSubmitting(false);
    }
  }, [onSubmit]);

  const initValues = {
    userIDs: assignees.map(item => String(item.userID)),
  };

  return (
    <Wrapper>
      <Formik
        enableReinitialize
        initialValues={initValues}
        onSubmit={onFormSubmit}
      >
        {() => {
          return (
            <Form>
              <Field
                name="userIDs"
              >
                {(fieldProps) => {
                  return (
                    <MultiSelect
                      placeholder="Invite people here..."
                      options={options}
                      {...fieldProps}
                    />
                  );
                }}
              </Field>
              <Button
                htmlType="submit"
                type="primary"
                icon={<SaveOutlined />}
                title="Save"
              />
              <Button
                type="default"
                icon={<CloseOutlined />}
                title="Cancel"
                onClick={onCancel}
              />
            </Form>
          );
        }}
      </Formik>
    </Wrapper>
  );
};

InviteForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default InviteForm;
export { InviteForm };
