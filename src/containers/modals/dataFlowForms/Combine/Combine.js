import React, { useCallback } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PlusOutlined } from '@ant-design/icons';

import { isArray } from '../../../../lib/lodash';
import { FormUtils } from '../../../../utils/FormUtils';
import { SelectUtils } from '../../../../utils/SelectUtils';
import { combineSchema } from '../../../../utils/validators/dataFlow';
import { selectFunctionsFromPreviousAction } from '../../../../redux/flowActions/selectors';
import { FIELD_TYPES } from '../../../../constants/forms';

import { Button } from '../../../../lib/ui';
import { ButtonPreview } from '../ButtonPreview';
import { propTypes, defaultProps, fields } from '../assets';

const CombineFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const Combine = ({ actionID, onSubmit, onRequest, initValues }) => {

  const functionsList = useSelector(selectFunctionsFromPreviousAction(actionID), shallowEqual);
  const options = SelectUtils.createOptions(functionsList, 'id', 'name');

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={combineSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        CombineFormBag.values = values;
        CombineFormBag.errors = errors;
        CombineFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.combine.map(fieldConfig => {
              const { name } = fieldConfig;
              const dynamicOptions = (name === 'sources') ? { options } : {};
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, { ...fieldConfig, ...dynamicOptions })}
                </Field>
              );
            })}
            <FieldArray name="columns">
              {(arrayHelpers) => {
                return (
                  <>
                    <div className="section-title">
                      <div>Columns</div>
                      <Button
                        shape="circle"
                        size="small"
                        icon={<PlusOutlined />}
                        onClick={() => arrayHelpers.push('')}
                      />
                    </div>
                    {isArray(values.columns) && values.columns.map((colName, index) => {
                      const fieldName = `columns.${index}`;
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

Combine.propTypes = {
  ...propTypes,
};

Combine.defaultProps = {
  ...defaultProps,
};

export default Combine;
export {
  Combine,
  CombineFormBag,
};
