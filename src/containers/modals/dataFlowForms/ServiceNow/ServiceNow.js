import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import { PlusOutlined } from '@ant-design/icons';

import { isArray } from '../../../../lib/lodash';

import { FormUtils } from '../../../../utils/FormUtils';
import { serviceNowTriggerSchema } from '../../../../utils/validators/dataFlow';
import { propTypes, defaultProps, fields } from '../assets';

import { Button } from '../../../../lib/ui';
import { Input, FieldWrapper } from '../../../../components/forms';
import { ButtonPreview } from '../ButtonPreview';

const ServiceNowFormBag = {
  values: {},
  errors: {},
  submitForm: () => {},
};

const ServiceNow = ({ onSubmit, onRequest, initValues }) => {

  return (
    <Formik
      enableReinitialize
      initialValues={initValues}
      validationSchema={serviceNowTriggerSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        const { values, errors, submitForm } = formikProps;
        ServiceNowFormBag.values = values;
        ServiceNowFormBag.errors = errors;
        ServiceNowFormBag.submitForm = submitForm;

        return (
          <Form>
            {fields.servicenow.map(fieldConfig => {
              const { name } = fieldConfig;
              return (
                <Field key={name} name={name}>
                  {fieldProps => FormUtils.Field(fieldProps, fieldConfig)}
                </Field>
              );
            })}

            <FieldArray name="columns">
              {(arrayHelpers) => {
                return (
                  <FieldWrapper
                    label={(
                      <div className="flex-label">
                        <div>Columns</div>
                        <Button
                          shape="circle"
                          size="small"
                          icon={<PlusOutlined />}
                          onClick={() => arrayHelpers.push('')}
                        />
                      </div>
                    )}
                  >
                    {isArray(values.columns) && values.columns.map((colName, index) => {
                      const fieldName = `columns.${index}`;
                      return (
                        <Field name={fieldName} key={index}>
                          {(fieldProps) => {
                            return (
                              <Input
                                {...fieldProps}
                              />
                            );
                          }}
                        </Field>
                      );
                    })}
                  </FieldWrapper>
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

ServiceNow.propTypes = {
  ...propTypes,
};

ServiceNow.defaultProps = {
  ...defaultProps,
};

export default ServiceNow;
export {
  ServiceNow,
  ServiceNowFormBag,
};
