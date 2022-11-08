import React, { useCallback } from 'react';
import * as PropTypes from 'prop-types';
import moment from 'moment';
import { useSelector, shallowEqual } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Row, Col } from 'antd';

import { SelectUtils } from '../../../../utils/SelectUtils';
import { isArray } from '../../../../lib/lodash';

import { selectList } from '../../../../redux/users/selectors';
import { selectAnotherTasksList } from '../../../../redux/tasks/selectors';
import { selectBaseData, selectUI } from '../../../../redux/currentTask/selectors';
import { selectBaseData as selectCurrentProject } from '../../../../redux/currentProject/selectors';

import { mockTags } from '../../../../utils/mocks/tasks';

import {
  Input,
  Select,
  MultiSelect,
  DateRange,
  TextArea,
  RadioButton,
  FieldWrapper,
} from '../../../../components/forms';

import { AddTodo } from '../AddTodo/AddTodo';
import { TodoCheckBox } from '../TodoCheckBox/TodoCheckBox';
import { fields, taskTypes } from './assets';
import { Wrapper } from './MainForm.style';

const mainFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const MainForm = ({ onSubmit }) => {

  const baseData = useSelector(selectBaseData, shallowEqual);
  const users = useSelector(selectList, shallowEqual);
  const project = useSelector(selectCurrentProject, shallowEqual);
  const tasksList = useSelector(selectAnotherTasksList(baseData.id), shallowEqual);

  const onFormSubmit = useCallback((values, actions) => {
    onSubmit(values);
    if (actions) {
      actions.setSubmitting(false);
    }
  }, [onSubmit]);

  const projectAssignees = project.assignees;
  const { timelineStart, timelineEnd, assignees } = baseData;
  const initValues = {
    ...baseData,
    timeline: [
      timelineStart ? moment(timelineStart) : null,
      timelineEnd ? moment(timelineEnd) : null,
    ],
    assignees: isArray(assignees)
      ? assignees.map(item => String(item.userID))
      : [],
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      onSubmit={onFormSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        mainFormBag.values = values;
        mainFormBag.errors = errors;
        mainFormBag.submitForm = submitForm;

        return (
          <Wrapper>
            <Form>
              <Row gutter={16}>
                <Col span={12}>
                  <FieldWrapper label={fields.assignees.label}>
                    <Field name={fields.assignees.name}>
                      {(fieldProps) => {
                        const field = fields.assignees;
                        const config = { options: SelectUtils.createAssigneesOptions(users, projectAssignees) };
                        return (
                          <MultiSelect
                            type="integer"
                            {...field}
                            {...fieldProps}
                            {...config}
                          />
                        );
                      }}
                    </Field>
                  </FieldWrapper>
                </Col>
                <Col span={12}>
                  <Row gutter={16}>
                    <Col span={16}>
                      <FieldWrapper label={fields.timeline.label}>
                        <Field name={fields.timeline.name}>
                          {(fieldProps) => {
                            const field = fields.timeline;
                            return (
                              <DateRange
                                {...field}
                                {...fieldProps}
                              />
                            );
                          }}
                        </Field>
                      </FieldWrapper>
                    </Col>
                    <Col span={8}>
                      <FieldWrapper label={fields.estimationHours.label}>
                        <Field name={fields.estimationHours.name}>
                          {(fieldProps) => {
                            const field = fields.estimationHours;
                            return (
                              <Input
                                {...field}
                                {...fieldProps}
                                addonAfter="hours"
                              />
                            );
                          }}
                        </Field>
                      </FieldWrapper>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <FieldWrapper label={fields.tags.label}>
                    <Field name={fields.tags.name}>
                      {(fieldProps) => {
                        const field = fields.tags;
                        const config = { options: SelectUtils.createOptions(mockTags) };
                        return (
                          <MultiSelect
                            {...field}
                            {...fieldProps}
                            {...config}
                          />
                        );
                      }}
                    </Field>
                  </FieldWrapper>
                </Col>
                <Col span={12}>
                  <FieldWrapper label={fields.parentID.label}>
                    <Field name={fields.parentID.name}>
                      {(fieldProps) => {
                        const field = fields.parentID;
                        const config = { options: SelectUtils.createOptions(tasksList, 'id', 'title') };
                        return (
                          <Select
                            type="integer"
                            {...field}
                            {...fieldProps}
                            {...config}
                          />
                        );
                      }}
                    </Field>
                  </FieldWrapper>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <FieldWrapper label={fields.description.label}>
                    <Field name={fields.description.name}>
                      {(fieldProps) => {
                        const field = fields.description;
                        return (
                          <TextArea
                            {...field}
                            {...fieldProps}
                          />
                        );
                      }}
                    </Field>
                  </FieldWrapper>
                </Col>
                <Col span={12}>
                  <FieldWrapper label={fields.type.label}>
                    <Field name={fields.type.name}>
                      {(fieldProps) => {
                        const field = fields.type;
                        const config = { options: taskTypes };
                        return (
                          <RadioButton
                            {...field}
                            {...fieldProps}
                            {...config}
                            buttonStyle="solid"
                          />
                        );
                      }}
                    </Field>
                  </FieldWrapper>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col span={24}>
                  <FieldWrapper label={fields.checklist.label}>
                    <FieldArray name={fields.checklist.name}>
                      {(arrayHelpers) => {
                        return (
                          <div>
                            <AddTodo onSubmit={(label) => {
                              const isExist = values.checklist.some(item => item.label === label);
                              if (!isExist) {
                                arrayHelpers.push({ label, done: false });
                              }
                            }}
                            />
                            {isArray(values.checklist) && values.checklist.map((todo, index) => {
                              const { label, done } = todo;
                              const fieldName = `${fields.checklist.name}.${index}`;

                              return (
                                <div className="todo" key={index}>
                                  <Field name={fieldName}>
                                    {(fieldProps) => {
                                      return (
                                        <TodoCheckBox
                                          label={label}
                                          done={done}
                                          fieldProps={fieldProps}
                                        />
                                      );
                                    }}
                                  </Field>
                                </div>
                              );
                            })}
                          </div>
                        );
                      }}
                    </FieldArray>
                  </FieldWrapper>
                </Col>
              </Row>
            </Form>
          </Wrapper>
        );
      }}
    </Formik>
  );
};

MainForm.propTypes = {
  onSubmit: PropTypes.func,
};

MainForm.defaultProps = {
  onSubmit: () => {},
};

export default MainForm;
export {
  MainForm,
  mainFormBag,
};
