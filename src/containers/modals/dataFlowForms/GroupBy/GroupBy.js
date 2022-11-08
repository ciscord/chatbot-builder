import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PlusOutlined } from '@ant-design/icons';

import { isArray } from '../../../../lib/lodash';
import { FormUtils } from '../../../../utils/FormUtils';
import { SelectUtils } from '../../../../utils/SelectUtils';
import { groupBySchema } from '../../../../utils/validators/dataFlow';
import { selectFunctionsFromPreviousAction } from '../../../../redux/flowActions/selectors';
import { FIELD_TYPES } from '../../../../constants/forms';

import { propTypes, defaultProps, fields } from '../assets';
import { Button } from '../../../../lib/ui/Button';
import { ButtonPreview } from '../ButtonPreview';

const GroupByFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const GroupBy = ({ actionID, onSubmit, onRequest, initValues }) => {

  const functionsList = useSelector(selectFunctionsFromPreviousAction(actionID), shallowEqual);
  const options = SelectUtils.createOptions(functionsList, 'id', 'name');

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={groupBySchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        GroupByFormBag.values = values;
        GroupByFormBag.errors = errors;
        GroupByFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.groupBy.map(fieldConfig => {
              const { name } = fieldConfig;
              const dynamicOptions = (name === 'sources') ? { options } : {};
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, { ...fieldConfig, ...dynamicOptions })}
                </Field>
              );
            })}
            <FieldArray name="group_by">
              {(arrayHelpers) => {
                return (
                  <>
                    <div className="section-title">
                      <div>Group By</div>
                      <Button
                        shape="circle"
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={() => arrayHelpers.push('')}
                      />
                    </div>
                    {isArray(values.group_by) && values.group_by.map((colName, index) => {
                      const fieldName = `group_by.${index}`;
                      return (
                        <Field name={fieldName} key={index}>
                          {fieldProps => FormUtils.Field(fieldProps, { type: FIELD_TYPES.input, placeholder: 'Column Name' })}
                        </Field>
                      );
                    })}
                  </>
                );
              }}
            </FieldArray>
            <ButtonPreview onClick={() => onRequest(values)} />
          </Form>
        );
      }}
    </Formik>
  );
};

GroupBy.propTypes = {
  ...propTypes,
};

GroupBy.defaultProps = {
  ...defaultProps,
};

export default GroupBy;
export {
  GroupBy,
  GroupByFormBag,
};
